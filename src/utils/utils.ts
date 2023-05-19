import cloneDeep from "lodash/cloneDeep"
import { RupeeSymbol } from "./constants"

export const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const isProd = (!process.env.NODE_ENV || process.env.NODE_ENV === "development") && window.env.ENVIRONMENT === "prod"

export const AddRupeeSymbol = (mrp: string | number | undefined | null, toFixed = 0, prependText = "") => {
  if (typeof mrp === "string") {
    const mrpNumber = (+mrp).toFixed(toFixed)
    return `${prependText}${RupeeSymbol} ${mrpNumber}`
  } else if (typeof mrp === "number") {
    const mrpNumber = mrp.toFixed(toFixed)
    return `${prependText}${RupeeSymbol} ${mrpNumber}`
  }
  return ""
}

export const DeepCopy = (item: any) => {
  return cloneDeep(item)
}
