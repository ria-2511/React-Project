import TypeFilter from "components/TypeFilters/TypeFilters"
import "./NavBar.scss"
import SortDropdown from "components/SortDropdown/SortDropdown"
import { navBarPropsType } from "./NavBar.types"
import Icon from "components/Icon/Icon"
import { useNavigate } from "react-router"

const NavBar = (props: navBarPropsType) => {
  const { isDashBoard } = props
  const navigate = useNavigate()
  const onBackBtnClick = () => {
    navigate(
      {
        pathname: "/",
      },
      { replace: true },
    )
  }
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
        <div onClick={onBackBtnClick}>
          <Icon iconName="backBtn" />
        </div>
      )}
    </div>
  )
}

export default NavBar
