import { ProductPropsType } from "./Product.types"
import "./Product.scss"
import { ListGroup } from "react-bootstrap"

const Product = (props: ProductPropsType) => {
  const { selectedProduct } = props
  return (
    <>
      {selectedProduct && (
        <div className="product">
          <img className="productImg" src={selectedProduct.primaryImage.jpegImages.lImage}></img>
          <div className="productDetails">
            <div className="productSeller">{selectedProduct.supplierName}</div>
            <div className="productName">{selectedProduct.name}</div>
            <div className="productDescription">
              <ListGroup variant="flush">
                <ListGroup.Item>Blouse Attached - {selectedProduct.blouseAttached ? "yes" : "no"}</ListGroup.Item>
                <ListGroup.Item>Blouse Fabric - {selectedProduct.blouseFabric}</ListGroup.Item>
                <ListGroup.Item>Saree Fabric - {selectedProduct.sareeFabric}</ListGroup.Item>
              </ListGroup>
            </div>
            <div className="fewAlert">{selectedProduct.availableQty < 50 && "Only Few Left!! Hurry Up!"}</div>
            {/* Price Details */}
            <div className="priceDetails">
              <div className="priceListing">Rs. {selectedProduct.listingPrice}</div>
              <div className="priceMrp">MRP Rs.{selectedProduct.mrp}</div>
              <div className="priceDiscount">({selectedProduct.discount}%)</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Product
