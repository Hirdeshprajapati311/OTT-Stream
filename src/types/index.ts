import type { ReactNode } from "react"

export interface SidebarLinkProps{
  linkLogo?: ReactNode;
  to: string;
}

export interface SidebarLogoProps{
  src: string
  className?: string
  alt: string
}

export interface BarLinkProps{
  to: string
  linkName?: string
  linkLogo?: ReactNode
}


export interface StreamDetailsProp{
  logo: ReactNode;
  title: string;
  year: number;
  seasons?: string;
  tvType: string;
  icon: ReactNode;
  rank: number;
  generalInfo:string

}