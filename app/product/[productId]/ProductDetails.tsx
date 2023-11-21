"use client";
import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsProps {
  product: any
}

export type CartProductType = {
  id: string,
  name: string,
  description: string,
  category: string,
  brand: string, 
  selectedImg: selectedImgType,
  quantity: number,
  price: number 
}

export type selectedImgType = {
  color: string,
  colorCode: string, 
  image: string
}

const Horizontal = () => {
  return <hr className="w-[30%] m-2"/>
}

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {
  
  const productRating = product.reviews.reduce((acc:number, item:any)=> item.rating + acc, 0) / product.reviews.length;
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand, 
    selectedImg: {...product.images[0]},
    quantity: 1,
    price: product.price 
  })

  const handleColorSelect = useCallback((value:selectedImgType)=> {
      setCartProduct((prev)=> {
        return { ...prev, selectedImg: value }
      })
  },[cartProduct.selectedImg])

  const handleQtyIncrease = useCallback(()=>{
    if(cartProduct.quantity === 99){
      return;
    }
   setCartProduct((prev)=>{
     return {...prev, quantity: prev.quantity++};
    })
  },[cartProduct])

  const handleQtydecrease = useCallback(()=>{
    if(cartProduct.quantity === 1){
      return;
    }
   setCartProduct((prev)=>{
     return {...prev, quantity: prev.quantity--};
    })
  },[cartProduct])


  
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
     <div className="">
      <ProductImage cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect} />
     </div>
     <div className="flex flex-col gap-1 text-slate-500">
      <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
      <div className="flex items-center gap-2">
        <Rating value={productRating} readOnly />
        <div className="">{product.reviews.length} reviews</div>
      </div>
      <Horizontal />
      <div className="text-justify">{product.description}</div>
      <Horizontal />
      <div>
        <span className="font-semibold">Category: </span> {product.category}
      </div>
      <div>
        <span className="font-semibold">Brand: </span> {product.brand}
      </div>
      <div className={product.inStock ? 'text-green-500 bg-green-200 py-2 px-4 w-fit mt-4 rounded-md' : 'text-red-500 bg-red-200 py-2 px-4 w-fit mt-4 rounded-md'}>{product.inStock ? 'In stock' : 'Out of stock'}</div>
      <Horizontal />
       <SetColor cartProduct={cartProduct} images={product.images} handleColorSelect={handleColorSelect}/>
      <Horizontal />
      <SetQuantity cartProduct={cartProduct} handleQtyIncrease={handleQtyIncrease}  handleQtydecrease={handleQtydecrease}/>
      <Horizontal />
      <div className="max-w-[300px]">
       <Button label="Add to Cart" onclick={()=>{}}/> 
      </div>
     </div>
    </div>
  )
}

export default ProductDetails




