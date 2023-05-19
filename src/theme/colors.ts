const palette = {
  neutral100: "#FFFFFF",
  neutral150: "#FAFAFA",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary: "#f23bb2",
  secondary: "#f462c1",
  border: "#5c5c5c",
  appBar: "#F23BB2",
  bdbdbd: "#bdbdbd",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  lavenderBlush: "#FFF0F8",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,

  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",

  /**
   * The default text color in many components.
   */
  text: palette.neutral800,

  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,

  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,

  /**
   * The default border color.
   */
  border: palette.border,

  /**
   * The main tinting color.
   */
  tint: palette.secondary,

  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,

  /**
   * Error messages.
   */
  error: palette.angry500,

  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
}
