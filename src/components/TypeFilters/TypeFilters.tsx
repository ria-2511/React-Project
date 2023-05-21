import Icon from "components/Icon/Icon"
import { TypeFilterPropTypes } from "./TypeFilter.types"
import "./TypeFilters.scss"
import { useState } from "react"
import { productType } from "data/product"
import { collections } from "data/collection"

const TypeFilter = (props: TypeFilterPropTypes) => {
  const { text, options, setDataToShow, filterType } = props
  const [isClicked, setIsClicked] = useState(false)
  const dataSet: productType[] = []
  const filters: any = []
  const handlOnClick = () => {
    setIsClicked((value: boolean) => !value)
  }

  const optionOnClick = (event: any) => {
    if (event.target.checked) {
      filters.push(event.target.id)
    } else if (!event.target.checked && filters.find((option: string) => option === event.target.id)) {
      const index = filters.findIndex((option: string) => option === event.target.id)
      filters.splice(index, 1)
    }
  }

  const onFilterClick = () => {
    if (filters.length) {
      filters.forEach((filter: string) => {
        const suitableProducts = collections.filter((data: productType) => data[filterType] === filter)
        dataSet.push(...suitableProducts)
      })
      setDataToShow && setDataToShow(dataSet)
    } else {
      setDataToShow && setDataToShow(collections)
    }
  }

  const onResetClick = () => {
    setDataToShow && setDataToShow(collections)
  }

  return (
    <div>
      <button id={text} onClick={handlOnClick} className="btn btn-light typeFilter" type="button">
        {text}
        <Icon iconName="chevron-down" />
      </button>
      <div>
        {isClicked && options && (
          <div>
            <div className="optionsSet">
              {options.map((option: string, index: number) => {
                return (
                  <div className="option">
                    <input className="labelClass" value={option} onClick={optionOnClick} key={index} id={option} type="checkbox" />
                    <label>{option}</label>
                  </div>
                )
              })}
            </div>
            <div className="functionBtns">
              <div onClick={onFilterClick} className="filterClick">
                <span>Filter</span>
              </div>
              <div onClick={onResetClick} className="filterClick">
                <span>Reset</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TypeFilter
