import { ReactNode } from "react";

import Footer from "src/components/Footer";
import Header from "src/components/Header";

import { FooterProps } from "src/components/Footer/Footer.types";

interface Props {
	children: ReactNode;
	footerProps: FooterProps;
}

const Layout: React.FC<Props> = ({ children, footerProps }) => {
	return (
		<>
			<Header />
			{children}
			<Footer {...footerProps} />
		</>
	);
};

export default Layout;
