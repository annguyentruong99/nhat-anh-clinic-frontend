import { ReactNode } from "react";

import Footer from "src/components/Footer";
import Header from "src/components/Header";

import { headerLinks } from "public/static/headerLinks";
import { clinicInfo } from "public/static/clinicInfo";

interface Props {
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header menuList={headerLinks} />
			{children}
			<Footer {...clinicInfo} />
		</>
	);
};

export default Layout;
