"use client"
import { formatPrice } from "@/utils/formatPrice"
import { CartProductType } from "../product/[productId]/ProductDetails"
import Link from "next/link"
import { truncateText } from "@/utils/truncateText"
import Image from "next/image"
import SetQuantity from "../components/products/SetQuantity"
import { useCart } from "@/hooks/useCart"

interface ItemContentProps{
  item: CartProductType
}

const ItemContent:React.FC<ItemContentProps> = ({item}) => {
  const {handleRemoveProductFromCart} = useCart();
  const {handleCartQtyIncrease} = useCart();
  const {handleCartQtyDecrease} = useCart();

  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-[.5px] border-slate-200 py-4">
     <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
      <Link href={`/product/${item.id}`}>
        <div className="relative w-[70px] aspect-square">
          <Image src={item.selectedImg.image} alt="" fill className="object-contain"/>
        </div>
      </Link>
      <div className="flex flex-col justify-between">
        <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
        <div className="">{item.selectedImg.color}</div>
        <div className="w-[70px]">
          <button className="text-slate-500 underline" onClick={() => handleRemoveProductFromCart(item) }>Remove</button>
        </div>
      </div>
     </div>
     <div className="justify-self-center font-semibold text-slate-400">{formatPrice(item.price)}</div>
     <div className="justify-self-center">
      <SetQuantity 
     cartCounter={true} 
     cartProduct={item} 
     handleQtyIncrease={() => {handleCartQtyIncrease(item)}} 
     handleQtydecrease={() => {handleCartQtyDecrease(item)}}
     />
     </div>
     <div className="justify-self-end">
      {formatPrice(item.price * item.quantity)}
     </div>
    </div>
  )
}

export default ItemContent


