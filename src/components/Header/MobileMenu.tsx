import { useState, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import HamburgerMenu from "../icons/HamburgerMenu";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { MobileNav } from "./styles";

import { HeaderProps } from "./Header.types";

const MobileMenu: React.FC<HeaderProps> = ({ menuList }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const { pathname } = useRouter();

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setDrawerOpen(open);
		};

	const navigation = (
		<Box
			sx={{ width: 280, overflow: "auto" }}
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}>
			<MobileNav>
				<ul>
					{menuList.map((item) => (
						<li
							key={item.href}
							className={pathname === item.href ? "mobile-active" : undefined}>
							<Link href={item.href}>{item.title}</Link>
						</li>
					))}
				</ul>
			</MobileNav>
		</Box>
	);

	return (
		<Fragment>
			<IconButton onClick={toggleDrawer(!drawerOpen)}>
				<HamburgerMenu />
			</IconButton>
			<SwipeableDrawer
				anchor='left'
				open={drawerOpen}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}>
				{navigation}
			</SwipeableDrawer>
		</Fragment>
	);
};

export default MobileMenu;
