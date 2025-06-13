import {NavLink} from 'react-router-dom'
import type { BarLinkProps, SidebarLogoProps } from "../types";
import { FiSearch } from "react-icons/fi";
import { PiBellSimpleBold } from "react-icons/pi";
import SidebarLink from './SidebarLink';
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from 'react';


const Header = () => {

  const [isFocused, SetIsFocused] = useState(false)



  return (
    <nav className='md:flex hidden flex-row bg-gradient-to-b from-black to-transparent justify-between relative md:px-28 md:py-6'>
      <div className='md:gap-6 lg:gap-10 flex flex-row'>
        <BarLink to="/home" linkName="Home" />
        <BarLink to="/browse" linkName="Browse" />
        <BarLink to="/kids" linkName="Kids" />
        <BarLink to="/support" linkName="Support" />
        <BarLink to="/faq" linkName="FAQ" />
      </div>
      <div className='flex flex-row gap-4 items-center'>
        <div className='flex flex-row cursor-pointer bg-white/30 gap-3 rounded-3xl text-white md:text-lg lg:text-xl items-center md:px-2 md:py-1 lg:p-2 justify-center'><FiSearch /><input onBlur={()=>SetIsFocused(false)} onFocus={() => SetIsFocused(true)} className={`outline-none border-none  bg-transparent transition-all duration-300 ease-in-out placeholder-white ${isFocused ? "md:40  lg:w-52" :"w-20"}`} placeholder='Search' /></div>
        
        <button className='p-3 md:text-lg lg:text-xl bg-white/30 cursor-pointer text-white flex justify-center items-center rounded-full'><PiBellSimpleBold /></button>
        
        <SidebarLink to="/Profile" linkLogo={<Logo className="object-cover rounded-full min-w-10 min-h-10 md:h-10 md:w-10 lg:h-12 lg:w-12" src="/assets/logo/person.jpeg" alt="User profile picture" />} />


        {/* User Profile */}
        <div className='lg:flex flex-row gap-2 items-center hidden text-white md:text-lg lg:text-xl font-semibold'><span>Hirdesh311</span>
        <IoMdArrowDropdown/>
        </div>
      </div>
      </nav>
  );
}

export default Header;


const BarLink = ({to,linkName}:BarLinkProps) => {
  return (
    <NavLink to={to} className={({ isActive }: { isActive: Boolean }) => `lg:text-lg drop-shadow-[2px_2px_0_black] md:text-base sm:text-sm font-bold ${isActive?"text-white":"text-gray-400"}`}>{linkName}</NavLink>
  )
}


const Logo = ({ src, className = "", alt }: SidebarLogoProps) => {
  return (
    <img className={className} src={src} alt={alt} />
  )
}



