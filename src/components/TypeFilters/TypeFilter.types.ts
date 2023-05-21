import { productType } from "data/product"

export type TypeFilterPropTypes = {
  filterType: keyof productType
  text: string
  setDataToShow?: (data: any) => void
  options: string[]
}
