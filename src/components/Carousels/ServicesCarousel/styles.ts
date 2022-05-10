import { styled } from "@mui/material/styles";
import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";

export const CarouselContainer = styled("div")(({ theme }) => ({
	marginTop: "24px",

	[theme.breakpoints.up("md")]: {
		marginTop: "16px",
	},
}));

export const NavigationContainer = styled("div")(({ theme }) => ({
	display: "flex",
	position: "absolute",
	bottom: "10%",
	left: "90%",
	zIndex: 100,
}));

export const HideInMobile = styled(Box)(({ theme }) => ({
	display: "none",

	[theme.breakpoints.up("md")]: {
		display: "inline-block",
		position: "relative",
		width: "100%",
	},
}));

export const navigationButtonStyles: SxProps<Theme> = {
	width: "44px",
	height: "44px",
	border: (theme) => `1px solid ${theme.palette.grey[500]}`,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	cursor: "pointer",
	marginRight: "8px",

	"&:hover": {
		backgroundColor: (theme) => theme.palette.primary.darker,
		border: (theme) => `1px solid ${theme.palette.primary.darker}`,
		transition: "background-color 0.3s",
		"& svg": {
			fill: (theme) => theme.palette.grey[0],
		},
	},

	"& svg": {
		fill: (theme) => theme.palette.grey[500],
	},
};
