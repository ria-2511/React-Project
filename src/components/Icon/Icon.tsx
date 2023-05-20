import { icons } from "data/icons"
import { IconPropsType } from "./Icon.types"
import "./Icon.scss"

const Icon = (props: IconPropsType) => {
  const { iconName } = props
  const { link, path, className } = icons[iconName]
  return (
    <div className="icon">
      <svg xmlns={link} width="16" height="16" fill="currentColor" className={className} viewBox="0 0 16 16">
        <path fill-rule="evenodd" d={path} />
      </svg>
    </div>
  )
}

export default Icon
