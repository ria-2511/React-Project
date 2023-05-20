import Icon from "components/Icon/Icon"
import { TypeFilterPropTypes } from "./TypeFilter.types"
import "./TypeFilters.scss"
import { useState } from "react"

const TypeFilter = (props: TypeFilterPropTypes) => {
  const { options, text } = props
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const handlOnClick = () => {
    setIsClicked((value) => !value)
  }

  return (
    <div>
      <button id={`${text}`} onClick={handlOnClick} className="btn btn-light typeFilter" type="button">
        {text}
        <Icon iconName="chevron-down" />
      </button>
      {isClicked && (
        <div className="optionsSet">
          {options.map((option: string) => {
            return (
              <div className="option">
                <input type="checkbox" />
                <label className="labelClass">{option}</label>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default TypeFilter
