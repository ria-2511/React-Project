export const GetWindowDimensions = (
  isWideScreen?: boolean,
): {
  width: number
  height: number
} => {
  if (isWideScreen) {
    return {
      width: 420,
      height: window.innerHeight - 8,
    }
  } else if (window) {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  } else {
    return {
      width: 0,
      height: 0,
    }
  }
}
