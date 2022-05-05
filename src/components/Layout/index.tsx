import { ReactNode } from "react";
import Footer from "./Footer";

import { FooterProps } from "./Footer/Footer.types";

interface Props {
	children: ReactNode;
	footerProps: FooterProps;
}

const Layout: React.FC<Props> = ({ children, footerProps }) => {
	return (
		<>
			{children}
			<Footer {...footerProps} />
		</>
	);
};

export default Layout;
