import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface SidebarItems {
  links: Array<{
    label: string
    href: string
    description: string
    icon?:LucideIcon
  }>
  extras?: ReactNode
}

export interface ContentItem {
  title: string;
  subTitle: string;
  href: string;
  description?: string | null;
  image?: string | null
}

export interface Content {
  title: string;
  description?: string | null;
  links: ContentItem[];
}

