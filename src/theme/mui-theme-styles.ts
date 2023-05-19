import { ThemeOptions } from "@mui/material/styles/createTheme"
import { colors } from "./colors"

interface ThemeType extends ThemeOptions {
  overrides: any
  props: any
}

export const themeOptions: ThemeType = {
  palette: {
    mode: "light",
    primary: {
      main: colors.palette.primary,
      light: colors.palette.primary,
      dark: colors.palette.primary,
    },
    secondary: {
      main: colors.palette.secondary,
      light: colors.palette.secondary,
      dark: colors.palette.secondary,
    },
    divider: colors.border,
  },
  spacing: 8,
  direction: "ltr",
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: colors.palette.neutral100,
        color: colors.palette.appBar,
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
          transform: "translateX(16px)",
          color: colors.palette.neutral100,
          "& + $track": {
            opacity: 1,
            border: "none",
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: `1px solid ${colors.palette.bdbdbd}`,
        backgroundColor: colors.palette.neutral150,
        opacity: 1,
        transition: "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    },
  },
  props: {
    MuiAppBar: {},
    MuiButtonBase: {
      disableRipple: false,
    },
    MuiTooltip: {
      arrow: true,
    },
    MuiButton: {
      size: "small",
    },
    MuiButtonGroup: {
      size: "small",
    },
    MuiCheckbox: {
      size: "small",
    },
    MuiFab: {
      size: "small",
    },
    MuiFormControl: {
      margin: "dense",
      size: "small",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiRadio: {
      size: "small",
    },
    MuiSwitch: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
      size: "small",
    },
  },
}
