import Link from "next/link"
import Container from "../Container"
import Image from "next/image"
import CartCount from "./CartCount"
import UserMenu from "./UserMenu"
import { getCurrentUser } from "@/actions/getCurrentUser"
import Categories from "./Categories"
import SearchBar from "./SearchBar"


const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href={"/"}>
             <Image src={"/images/explores_word.png"} width={150} height={100} alt=""/>
            </Link>
            <div className="hidden md:block"><SearchBar /></div>
            <div className="flex items-center gap-6 md:gap-6">
              <CartCount />
              <span>Hi, {currentUser?.name}</span>
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  )
}

export default Navbar



