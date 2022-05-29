import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
	maxHeight: "276px",
	backgroundColor: theme.palette.primary.light,

	[theme.breakpoints.up("md")]: {
		minHeight: "400px",
		backgroundRepeat: "no-repeat",
		backgroundSize: "259px 334px",
		backgroundPosition: "bottom right",
	},
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
	padding: "20px 0",

	[theme.breakpoints.up("md")]: {
		padding: "98px 0",
	},
}));

export const ServiceHighlightsContainer = styled(Box)(({ theme }) => ({
	marginTop: "24px",

	[theme.breakpoints.up("md")]: {
		marginTop: "28px",
	},
}));
