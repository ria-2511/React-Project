import TypeFilter from "components/TypeFilters/TypeFilters"
import "./NavBar.scss"
import SortDropdown from "components/SortDropdown/SortDropdown"
import { navBarPropsType } from "./NavBar.types"
import Icon from "components/Icon/Icon"

const NavBar = (props: navBarPropsType) => {
  const { isDashBoard } = props
  return (
    <div className="navBar">
      {!isDashBoard ? (
        <div className="navBarDashboard">
          {/* filter buttons */}
          <div className="filterButton">
            <TypeFilter text="Saree Type" options={["handle", "sample"]} />
            <TypeFilter text="Saree Type" options={["handle", "sample"]} />
          </div>
          {/* sort Dropdown */}
          <SortDropdown text="Sample" />
        </div>
      ) : (
        <Icon iconName="backBtn" />
      )}
    </div>
  )
}

export default NavBar
