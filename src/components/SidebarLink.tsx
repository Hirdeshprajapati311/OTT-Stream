import {NavLink} from 'react-router-dom'
import type { SidebarLinkProps } from '../types';

const SidebarLink = ({ linkLogo, to }: SidebarLinkProps) => {
  return (
    <NavLink className={({ isActive }: { isActive: boolean }) => ` text-text-dark md:text-xl lg:text-2xl flex justify-center items-center  ${isActive ? 'transition-all duration-300 md:p-1 lg:p-2 rounded-full bg-primary-dark/50' : ''}`} to={to} >{linkLogo}</NavLink>
  )
}

export default SidebarLink;
