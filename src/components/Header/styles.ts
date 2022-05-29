import { styled } from "@mui/material/styles";

import Toolbar from "@mui/material/Toolbar";

export const StyledNav = styled("nav")(({ theme }) => ({
	"& ul": {
		listStyle: "none",
		"& li": {
			[theme.breakpoints.up("lg")]: {
				margin: "0 20px",
			},
			listStyle: "none",
			position: "relative",
			display: "inline-block",
			"& a": {
				color: theme.palette.grey["300"],
				textDecoration: "none",
				minWidth: 0,
				"&:after": {
					content: "''",
					height: 3,
					background: theme.palette.primary.main,
					width: 0,
					position: "absolute",
					bottom: -15,
					left: "50%",
					transition: "all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)",
				},
				"&:hover": {
					color: theme.palette.primary.main,
					transition: "all 0.3s ease-out",
					"&:after": {
						width: "100%",
						left: 0,
						borderBottomColor: theme.palette.primary.main,
					},
				},
			},
			'&[class="active"]': {
				"& a": {
					color: theme.palette.primary.main,
					"&:after": {
						width: "100%",
						left: 0,
					},
				},
			},
		},
	},
}));

export const MobileNav = styled("nav")(({ theme }) => ({
	"& ul": {
		listStyle: "none",
		padding: "0 16px",
		paddingTop: "60px",
		"& li": {
			margin: "16px 0",
			padding: "16px 12px",
			fontSize: "16px",
			fontWeight: 500,
			color: theme.palette.grey["300"],
			'&[class="mobile-active"]': {
				backgroundColor: theme.palette.primary.main,
				borderRadius: "4px",
				color: theme.palette.grey[0],
				fontWeight: 700,
			},
		},
	},
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
}));
