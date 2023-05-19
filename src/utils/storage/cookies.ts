export const getCookie = (name: string): string | null => {
  const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)")
  return v ? v[2] : null
}

export const setCookie = (name: string, value: string, days: number): void => {
  const d = new Date()
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toUTCString()
}

export const deleteCookie = (name: string): void => {
  setCookie(name, "", -1)
}
