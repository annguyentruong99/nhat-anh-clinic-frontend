import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.light,
	height: "276px",
	marginBottom: "60px",

	[theme.breakpoints.up("md")]: {
		height: "670px",
		marginBottom: "132px",
	},
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
	paddingTop: " 20px",

	[theme.breakpoints.up("md")]: {
		paddingTop: "90px",
	},
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
	paddingTop: "132px",
}));
