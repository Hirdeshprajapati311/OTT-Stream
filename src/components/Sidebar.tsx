
import type { SidebarLogoProps } from "../types";
import { RiHomeLine } from "react-icons/ri";
import { HiOutlineChartBar } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { BsCalendar4 } from "react-icons/bs";
import { BsLightningCharge } from "react-icons/bs";
import { PiBellSimpleBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import SidebarLink from "./SidebarLink";



const Sidebar = () => {
  return (
    <aside className="hidden h-full md:w-16 lg:w-20 bg-primary-dark pt-8 md:flex flex-col justify-between ">
      <div className="flex-col md:gap-4 lg:gap-6 w-full flex items-center">
        <SidebarLink to="/personal" linkLogo={<Logo className="object-contain mx-auto md:h-12 md:w-12 lg:h-15 lg:w-15" src="/assets/logo/Logomark.png" alt="Company logo" />} />
        <SidebarLink to="/home" linkLogo={<RiHomeLine />} />
        <SidebarLink to="/trending" linkLogo={<HiOutlineChartBar />} />
        <SidebarLink to="/personal" linkLogo={<GoPerson />} />
        <SidebarLink to="/mark" linkLogo={<BsCalendar4 />} />
        <SidebarLink to="/current" linkLogo={<BsLightningCharge />} />
        <SidebarLink to="/notification" linkLogo={<PiBellSimpleBold />} />
      </div>

      <div className="flex-col md:gap-4 lg:gap-6 w-full flex items-center pb-8">
        <SidebarLink to="/Settings" linkLogo={<IoSettingsOutline />} />
        <SidebarLink to="/Profile" linkLogo={<Logo className="object-cover rounded-full md:h-10 md:w-10 lg:h-12 lg:w-12" src="/assets/logo/person.jpeg" alt="User profile picture" />} />
      </div>
    </aside>
  );
}

export default Sidebar;



const Logo = ({ src, className = "", alt }: SidebarLogoProps) => {
  return (
    <img className={className} src={src} alt={alt} />
  )
}
