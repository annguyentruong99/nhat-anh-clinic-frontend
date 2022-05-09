import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const StyledBox = styled(Box)(({ theme }) => ({
	height: "709px",
	backgroundColor: theme.palette.primary.light,
	paddingTop: "16px",

	[theme.breakpoints.up("lg")]: {
		paddingTop: "91px",
		height: "600px",
	},
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[0],
	backgroundColor: theme.palette.error.main,
	width: "fit-content",
	padding: "8px 16px",

	[theme.breakpoints.up("lg")]: {
		fontSize: "16px",
	},
}));

export const TitleContainer = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		display: "block",
	},
}));

export const Title1 = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.darker,
	marginTop: "16px",

	[theme.breakpoints.up("lg")]: {
		fontSize: "52px",
		height: "fit-content",
		fontWeight: 600,
		lineHeight: "72px",
	},
}));

export const Title2 = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.darker,
	fontSize: "60px",
	fontWeight: 800,
	lineHeight: "80px",

	[theme.breakpoints.up("lg")]: {
		fontSize: "114px",
		lineHeight: "152px",
		letterSpacing: "4px",
	},
}));

export const Description = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[500],
	fontSize: "14px",
	marginTop: "12px",
}));

export const CtaContainer = styled("div")(({ theme }) => ({
	marginTop: "24px",
	width: "70%",

	[theme.breakpoints.up("lg")]: {
		width: "40%",
	},
}));