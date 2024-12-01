import React, { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface LayoutSiteProps {
	children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
	return (
		<div className={scss.LayoutSite}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default LayoutSite;
