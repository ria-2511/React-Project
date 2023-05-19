export type ListGetParamType = {
  o: number
  l: number
  order_by?: string
  sort_order?: string
  ordering?: string
}

export type TableColumnType = {
  id: string
  label: string
  minWidth?: number
  searchEnabled?: boolean
  orderBy?: OrderByType
  disableOrderBy?: boolean
  searchField?: string
  searchFieldValue?: string
  placeholderText?: string
  type?: "text" | "date"
  align?: "right" | "left" | "inherit" | "center" | "justify"
}

export type OrderByType = false | "asc" | "desc" | undefined

export interface PriceFilterInterface {
  minPrice: number
  maxPrice: number
}
