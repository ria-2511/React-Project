#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const dotenv = require("dotenv")
const cheerio = require("cheerio")
const prettier = require("prettier")
const get = require("lodash/get")
const pick = require("lodash/pick")

/** Load app's package.json */
const appPackage = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../package.json")))

/** Load app's .env file */
dotenv.config({ path: path.resolve(__dirname, "../.env") })

/**
 * Read environment variables whitelist
 * from the app's package.json
 **/
const whitelist = get(appPackage, "public-env.whitelist", [])

/**
 * Remove all environment variables
 * not included in the whitelist
 */
const env = whitelist.length ? pick(process.env, whitelist) : process.env

const envFile = `window.env = ${JSON.stringify(env, null, 2)};`

/**
 * Patch app's public/index.html
 */
const publicIndexHtmlPath = path.resolve(__dirname, "../public/index.html")
const publicIndexHtmlSource = fs.readFileSync(publicIndexHtmlPath)
const publicIndexIndexPatched = patchIndexHtml(publicIndexHtmlSource)
fs.writeFileSync(publicIndexHtmlPath, publicIndexIndexPatched)

/**
 * Patch app's build/index.html
 */
const buildIndexHtmlPath = path.resolve(__dirname, "../build/index.html")
fs.access(buildIndexHtmlPath, fs.constants.W_OK, (err) => {
  if (err) return
  const buildIndexHtmlSource = fs.readFileSync(buildIndexHtmlPath)
  const buildIndexIndexPatched = patchIndexHtml(buildIndexHtmlSource)
  fs.writeFileSync(buildIndexHtmlPath, buildIndexIndexPatched)
})

function patchIndexHtml(html) {
  let $ = cheerio.load(html)

  if ($("script#react-dotenv").length) {
    $("script#react-dotenv").text(envFile)
  } else {
    $("head").append(`\t<script id="react-dotenv">${envFile}</script>\n\t`)
  }

  if ($("base#base-url-def").length) {
    $("base#base-url-def").attr("href", process.env.PUBLIC_URL || "/")
  } else {
    $("head").append(`\t<base href="${process.env.PUBLIC_URL || "/"}" id="base-url-def"/>\n\t`)
  }

  return prettier.format($.html(), { parser: "html" })
}
