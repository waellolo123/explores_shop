"use client";

import { Rating } from "@mui/material";

interface ProductDetailsProps {
  product: any
}

const Horizontal = () => {
  return <hr className="w-[30%] m-2"/>
}

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {
  
  const productRating = product.reviews.reduce((acc:number, item:any)=> item.rating + acc, 0) / product.reviews.length;
  
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
     <div className="">images</div>
     <div className="flex flex-col gap-1 text-slate-500">
      <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
      <div className="flex items-center gap-2">
        <Rating value={productRating} readOnly />
        <div className="">{product.reviews.length} reviews</div>
      </div>
      <Horizontal />
      <div className="text-justify">{product.description}</div>
      <Horizontal />
      <div className="font-semibold">
        <span>Category: </span> {product.category}
      </div>
      <div className="font-semibold">
        <span>Brand: </span> {product.brand}
      </div>
      <div className={product.inStock ? 'text-green-500 bg-green-200 py-2 px-4 w-fit mt-4' : 'text-red-500 bg-red-200 py-2 px-4 w-fit mt-4'}>{product.inStock ? 'In stock' : 'Out of stock'}</div>
     </div>
    </div>
  )
}

export default ProductDetails


