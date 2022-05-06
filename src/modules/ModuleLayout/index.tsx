import { ReactNode } from "react";

import Footer from "src/components/Footer";
import Header from "src/components/Header";

import { HeaderProps } from "src/components/Header/Header.types";
import { FooterProps } from "src/components/Footer/Footer.types";
import { headerLinks } from "public/static/headerLinks";

interface Props {
	children: ReactNode;
	footerProps: FooterProps;
	headerProps: HeaderProps;
}

const Layout: React.FC<Props> = ({ children, footerProps, headerProps }) => {
	return (
		<>
			<Header menuList={headerLinks} />
			{children}
			<Footer {...footerProps} />
		</>
	);
};

export default Layout;
