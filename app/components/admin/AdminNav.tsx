"use client";
import Link from "next/link";
import Container from "../Container";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard, MdDns, MdEvent, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import { GiMountaintop } from "react-icons/gi";
import { usePathname } from "next/navigation";


const AdminNav = () => {

  const pathname = usePathname();

  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-wrap">
          <Link href={"/admin"}><AdminNavItem label="Summary" icon={MdDashboard} selected={pathname == '/admin'}/></Link>
          <Link href={"/admin/add-products"}><AdminNavItem label="Add Products" icon={MdLibraryAdd} selected={pathname == '/admin/add-products'}/></Link>
          <Link href={"/admin/manage-products"}><AdminNavItem label="Manage Products" icon={MdDns} selected={pathname == '/admin/manage-products'}/></Link>
          <Link href={"/admin/manage-orders"}><AdminNavItem label="Manage Orders" icon={MdFormatListBulleted} selected={pathname == '/admin/manage-orders'}/></Link>
          <Link href={"/admin/add-events"}><AdminNavItem label="Add Events" icon={GiMountaintop} selected={pathname == '/admin/add-events'}/></Link>
          <Link href={"/admin/manage-events"}><AdminNavItem label="Manage Events" icon={MdEvent} selected={pathname == '/admin/manage-events'}/></Link>
        </div>
      </Container>
    </div>
  )
}

export default AdminNav




