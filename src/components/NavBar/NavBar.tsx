import TypeFilter from "components/TypeFilters/TypeFilters"
import "./NavBar.scss"
import SortDropdown from "components/SortDropdown/SortDropdown"
import { navBarPropsType } from "./NavBar.types"
import { collections } from "data/collection"
import { productType } from "data/product"

const NavBar = (props: navBarPropsType) => {
  const { setDataToShow } = props
  const supplierOptions = Array.from(new Set(collections.map((item: productType) => item.supplierName)))
  const sareeFabricOptions = Array.from(new Set(collections.map((item: productType) => item.sareeFabric)))

  return (
    <div className="navBar">
      {
        <div className="navBarDashboard">
          <div className="filters">
            {/* filter buttons */}
            <div className="filterButton">
              <TypeFilter setDataToShow={setDataToShow} key={"Suppliers"} filterType="supplierName" text="Suppliers" options={supplierOptions} />
              <TypeFilter setDataToShow={setDataToShow} key={"Saree Fabric"} filterType="sareeFabric" text="Saree Fabric" options={sareeFabricOptions} />
            </div>
            {/* sort Dropdown */}
            <SortDropdown text="Sample" />
          </div>
        </div>
      }
    </div>
  )
}

export default NavBar
