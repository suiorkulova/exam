'use client'
import LayoutSite from "@/components/layout/LayoutSite";
import { FC, ReactNode } from "react";
// import scss from "./layout.module.scss"

interface ILayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<ILayoutClientProps> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default LayoutClient;