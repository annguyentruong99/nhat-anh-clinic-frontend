import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
	maxHeight: "336px",

	[theme.breakpoints.up("md")]: {
		maxHeight: "760px",
	},
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
	padding: "20px 0",
	maxWidth: "80%",
	[theme.breakpoints.up("md")]: {
		padding: "90px 0",
	},
}));
