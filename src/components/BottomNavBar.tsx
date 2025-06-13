import { NavLink } from "react-router-dom";
import type { BarLinkProps } from "../types";
import { RiHomeLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { TbDeviceTv } from "react-icons/tb";
import { RiMessage2Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";

const BottomNavBar = () => {
  return (
    <nav className="md:hidden rounded-2xl mb-2 max-w-[280px] sm:max-w-2xl mx-auto backdrop-blur-md  bottom-0 inset-x-0 fixed w-full z-50  bg-black/80 flex-row flex  min-w-[310px]  justify-around items-center  sm:gap-6  py-4">
      <BarLink to="" linkLogo={<RiHomeLine />} />
      <BarLink to="/search" linkLogo={<FiSearch />} />
      <BarLink to="/home" linkLogo={<TbDeviceTv />} />
      <BarLink to="/watchtogether" linkLogo={<RiMessage2Line />} />
      <BarLink to="/profile" linkLogo={<GoPerson></GoPerson>} />
    </nav>
  );
}

export default BottomNavBar;


const BarLink = ({ to, linkLogo }: BarLinkProps) => {
  return (
    <NavLink to={to} className={({ isActive }: { isActive: Boolean }) => `text-2xl font-bold p-2 rounded-full text-white ${isActive ? "bg-primary-dark/50" : ""}`}>{linkLogo}</NavLink>
  )
}