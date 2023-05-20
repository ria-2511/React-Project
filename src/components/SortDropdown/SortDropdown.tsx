import { Dropdown } from "react-bootstrap"
import "./SortDropdown.scss"
import { SortDropdownPropsType } from "./SortDropdown.types"

const SortDropdown = (props: SortDropdownPropsType) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className="dropdown" variant="secondary">
          {props.text}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default SortDropdown
