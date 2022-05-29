import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../Logo";
import MobileMenu from "./MobileMenu";
import NavigationSeo from "../Seo/NavigationSeo";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { useTheme, useMediaQuery } from "@mui/material";
import { StyledNav, StyledToolbar } from "./styles";

import { HeaderProps } from "./Header.types";

const Header: React.FC<HeaderProps> = ({ menuList }) => {
	const router = useRouter();
	const theme = useTheme();

	const { pathname } = router;
	const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

	return (
		<Fragment>
			<NavigationSeo links={menuList} />
			<AppBar
				position='sticky'
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Container>
					<StyledToolbar disableGutters>
						{isDesktop && <Logo />}
						{isDesktop ? (
							<StyledNav>
								<ul>
									{menuList.map((item) => (
										<li
											key={item.href}
											className={pathname === item.href ? "active" : undefined}>
											<Link href={item.href}>{item.title}</Link>
										</li>
									))}
								</ul>
							</StyledNav>
						) : (
							<MobileMenu menuList={menuList} />
						)}
					</StyledToolbar>
				</Container>
			</AppBar>
		</Fragment>
	);
};

export default Header;
