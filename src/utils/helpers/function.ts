// eslint-disable-next-line @typescript-eslint/ban-types
export function Debounce(func: Function, delay: number) {
  let timeout: NodeJS.Timeout | undefined
  return function () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => func.apply(context, args), delay)
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function Throttle(func: Function, delay: number) {
  let wait = false

  return (...args: any) => {
    if (wait) {
      return
    }

    func(...args)
    wait = true
    setTimeout(() => {
      wait = false
    }, delay)
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function Once(func: Function) {
  let ran = false
  let result: any
  return function () {
    if (ran) return result
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line prefer-rest-params
    result = func.apply(this, arguments)
    ran = true
    return result
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function Memoize(func: Function) {
  const cache = new Map()
  return function () {
    // eslint-disable-next-line prefer-rest-params
    const key = JSON.stringify(arguments)
    if (cache.has(key)) {
      return cache.get(key)
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line prefer-rest-params
    const result = func.apply(this, arguments)
    cache.set(key, result)
    return result
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function Pipe(...funcs: Function[]) {
  return (...args: any[]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return funcs.reduce((result, func) => [func.call(this, ...result)], args)[0]
  }
}
