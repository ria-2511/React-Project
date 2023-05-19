export const Console = {
  log: function (...args: any[]) {
    if (process.env.NODE_ENV === "production") return
    // eslint-disable-next-line no-console
    console.log(...args)
  },
  error: function (...args: any[]) {
    if (process.env.NODE_ENV === "production") return
    // eslint-disable-next-line no-console
    console.error(...args)
  },
  info: function (...args: any[]) {
    if (process.env.NODE_ENV === "production") return
    // eslint-disable-next-line no-console
    console.info(...args)
  },
  warn: function (...args: any[]) {
    if (process.env.NODE_ENV === "production") return
    // eslint-disable-next-line no-console
    console.warn(...args)
  },
  debug: function (...args: any[]) {
    if (process.env.NODE_ENV === "production") return
    // eslint-disable-next-line no-console
    console.debug(...args)
  },
}
