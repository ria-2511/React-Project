type imageType = {
  lImage: string
  mImage: string
  sImage: string
  xsImage: string
}

export type productType = {
  id: number
  slug: string
  code: string
  productId: number
  name: string
  description: string
  blouseAttached: boolean
  blouseFabric: string
  sareeFabric: string
  mrp: number
  listingPrice: number
  discount: number
  isAvailable: boolean
  isActive: boolean
  supplierId: number
  supplierName: string
  availableQty: number
  primaryImage: {
    jpegImages: imageType
    webpImages: imageType
  }
}

export const product: productType = {
  id: 174,
  slug: "saree-black-sequenced-poly-georgette-sequence-work-a6164-buy-174",
  code: "A6164-black-Free_Size",
  productId: 129,
  name: "Black Georgette Saree With Blouse Piece",
  description: '"Color : Black  Fabric : Poly Georgette Blouse : Yes"',
  blouseAttached: true,
  blouseFabric: "poly-georgette",
  sareeFabric: "poly-georgette",
  mrp: 1824,
  listingPrice: 1240,
  discount: 32,
  isActive: true,
  isAvailable: true,
  supplierId: 67,
  supplierName: "Saree Shop",
  availableQty: 139,
  primaryImage: {
    jpegImages: {
      lImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/l_1A3198H.jpeg",
      mImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/m_1A3198H.jpeg",
      sImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/s_1A3198H.jpeg",
      xsImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/xs_1A3198H.jpeg",
    },
    webpImages: {
      lImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/l_1A3198H.webp",
      mImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/m_1A3198H.webp",
      sImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/s_1A3198H.webp",
      xsImage: "https://d2mg89328eg065.cloudfront.net/optimized_media/300/xs_1A3198H.webp",
    },
  },
}
