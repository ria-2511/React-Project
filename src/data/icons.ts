type iconsObj = {
  link: string
  path: string
  defaultWidth: string
  defaultHeight: string
  defaultColor: string
  className: string
  viewBox: string
}

type iconsType = {
  [key: string]: iconsObj
}

export const icons: iconsType = {
  "chevron-down": {
    link: "http://www.w3.org/2000/svg",
    path: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
    defaultWidth: "16",
    defaultHeight: "16",
    defaultColor: "currentColor",
    className: "bi bi-chevron-down",
    viewBox: "0 0 16 16",
  },
  backBtn: {
    link: "http://www.w3.org/2000/svg",
    path: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z",
    defaultWidth: "16",
    defaultHeight: "16",
    defaultColor: "currentColor",
    className: "bi bi-arrow-left",
    viewBox: "0 0 16 16",
  },
}
