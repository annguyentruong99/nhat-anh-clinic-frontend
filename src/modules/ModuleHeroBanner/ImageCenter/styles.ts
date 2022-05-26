import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.light,
	maxHeight: "276px",
	marginBottom: "60px",

	[theme.breakpoints.up("md")]: {
		maxHeight: "670px",
		marginBottom: "132px",
	},
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
	paddingTop: " 20px",

	[theme.breakpoints.up("md")]: {
		paddingTop: "90px",
	},
}));

export const SearchBarContainer = styled(Box)(({ theme }) => ({
	display: "none",

	[theme.breakpoints.up("md")]: {
		display: "block",
		maxWidth: "750px",
		marginTop: "40px",
	},
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
	marginTop: "20px",

	[theme.breakpoints.up("md")]: {
		marginTop: "40px",
	},
}));
