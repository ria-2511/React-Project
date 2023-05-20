import TypeFilter from "components/TypeFilters/TypeFilters"
import "./NavBar.scss"
import SortDropdown from "components/SortDropdown/SortDropdown"
import { navBarPropsType } from "./NavBar.types"
import Icon from "components/Icon/Icon"
import { useNavigate } from "react-router"
import { collections } from "data/collection"
import { productType } from "data/product"

const NavBar = (props: navBarPropsType) => {
  const { isDashBoard } = props
  const navigate = useNavigate()
  const supplierOptions = Array.from(new Set(collections.map((item: productType) => item.supplierName)))
  const sareeFabricOptions = Array.from(new Set(collections.map((item: productType) => item.sareeFabric)))

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
            <TypeFilter text="Suppliers" options={supplierOptions} />
            <TypeFilter text="Saree Fabric" options={sareeFabricOptions} />
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
