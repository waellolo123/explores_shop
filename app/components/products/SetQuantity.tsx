"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps{
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtydecrease: () => void;
}

const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded-md'

const SetQuantity:React.FC<SetQtyProps> = ({cartProduct, cartCounter, handleQtyIncrease, handleQtydecrease}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">Quantity</div>}
      <div className="flex gap-4 items-center text-base">
        <button onClick={handleQtydecrease} className={btnStyles}>-</button>
        <div className="">{cartProduct.quantity}</div>
        <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
      </div>
    </div>
  )
}

export default SetQuantity

