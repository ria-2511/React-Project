import { Card } from "react-bootstrap"
import { collections } from "../../data/collection"
import "./MainPage.scss"
import { useEffect, useState } from "react"
import Product from "components/Product/Product"
import { productType } from "data/product"
import { useNavigate } from "react-router"
import { MainPageProps } from "./MainPage.types"

const MainPage = ({ dataToShow = collections }: MainPageProps) => {
  const [isProductClicked, setIsProductClicked] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<productType | undefined>()
  const navigate = useNavigate()

  const handleProductClick = (event: any) => {
    const productId = event.target.id
    const selectedProduct = collections.find((item: productType) => item.id === Number(productId))
    setSelectedProduct(selectedProduct)
    setIsProductClicked(true)
  }

  useEffect(() => {
    if (selectedProduct && selectedProduct.productId) {
      navigate(
        {
          pathname: `/`,
          search: `?productId=${selectedProduct.productId}`,
        },
        { replace: true },
      )
    }
  }, [selectedProduct])

  return (
    <div className="container">
      {isProductClicked && selectedProduct ? (
        <div>
          <Product selectedProduct={selectedProduct} />
        </div>
      ) : (
        <div className="mainPage">
          {/* Main Page Map */}
          {dataToShow.map((option: productType) => {
            return (
              <div id={`${option.id}`} key={option.id}>
                <Card style={{ width: "14rem" }} id={`${option.id}`} className="border-light mainCardStyle">
                  <Card.Img className="carImg" onClick={handleProductClick} id={`${option.id}`} variant="top" src={option.primaryImage.jpegImages.lImage} />
                  <Card.Body>
                    <Card.Title>{option.supplierName}</Card.Title>
                    <Card.Text className="cardName">{option.name}</Card.Text>
                    <div className="classText">
                      <Card.Text className="cardListedPrice">Rs. {option.listingPrice}</Card.Text>
                      <Card.Text className="cardMrp">Rs. {option.mrp}</Card.Text>
                      <Card.Text className="cardDiscount">({option.discount}% OFF)</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default MainPage
