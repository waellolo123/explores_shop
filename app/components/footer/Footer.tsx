import Link from "next/link"
import Container from "../Container"
import FooterList from "./FooterList"
import {MdFacebook} from "react-icons/md";
import {AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
     <Container>
      <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
       <FooterList>
        <h3 className="font-semibold text-red-400 text-xl">Explores Products</h3>
        <Link href={"#"}>Man</Link>
        <Link href={"#"}>Women</Link>
        <Link href={"#"}>unit Collection</Link>
       </FooterList>
       <FooterList>
        <h3 className="font-semibold text-red-400 text-xl">Customers Service</h3>
        <Link href={"#"}>Contact Us</Link>
        <Link href={"#"}>Shipping Policy</Link>
        <Link href={"#"}>Returns & Exchanges</Link>
        <Link href={"#"}>FAQs</Link>
       </FooterList>
       <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h3 className="font-semibold text-red-400 text-xl">About Us</h3>
        <p className="mb-2">Technology without Innovation Design is Valueless.
                           BigK is an innovative sports brand which was born to change life style!
                           Currently standard for sport is always focus on the performance but we focus more on how to Improve your capacity and looking nicer.</p>
        <p className="">&copy; {new Date().getFullYear()} Explores. All rights reserved</p>
       </div>
       <FooterList>
        <h3 className="font-semibold text-white text-xl">Follow Us</h3>
        <div className="flex items-center gap-2">
         <Link href={"/"}><MdFacebook size={24} className="text-red-400"/></Link> 
         <Link href={"/"}><AiFillTwitterCircle size={24} className="text-red-400"/></Link> 
         <Link href={"/"}><AiFillInstagram size={24} className="text-red-400"/></Link> 
         <Link href={"/"}><AiFillYoutube size={24} className="text-red-400"/></Link> 
        </div>
       </FooterList>
      </div> 
     </Container> 
    </footer>
  )
}

export default Footer


