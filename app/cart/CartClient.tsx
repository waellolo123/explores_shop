"use client";
import { useCart } from "@/hooks/useCart"
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";


const CartClient = () => {

  const {cartProducts} = useCart();
  if(!cartProducts || cartProducts.length === 0){
    return (
      <div className="flex flex-col items-center ">
        <div className="text-2xl">Your Cart is empty</div>
        <div>
          <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
            <MdArrowBack size={30} className="text-2xl text-teal-400 bg-teal-100 p-2 rounded-full cursor-pointer"/>
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    )
  }


  return (
    <div>
      <Heading title="Shopping Cart" center/>
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div className="">
        {cartProducts && cartProducts.map((item)=> {
          return <div key={item.id}>
            {item.name}
          </div>
        })}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between items-center gap-4">
        <div className="w-[90px]">
          <Button label="Clear Cart" small outline onclick={() => {}}/>
        </div>
        <div className="text-sm flex flex-col gap-4 items-start">
            <div className="flex gap-2 justify-between w-full text-base font-semibold">
             <span>Subtotal</span>
             <span>$1.000</span>
            </div>
            <p className="text-slate-500">Taxes and shipping calculated at checkout</p>
            <Button label="Checkout" onclick={()=>{}}/>
            <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
            <MdArrowBack size={30} className="text-2xl text-teal-400 bg-teal-100 p-2 rounded-full cursor-pointer"/>
            <span>Continue Shopping</span>
          </Link>
          </div>
      </div>
    </div>
  )
}

export default CartClient

