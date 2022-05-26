import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
	margin: "40px 0",

	[theme.breakpoints.up("md")]: {
		margin: "100px 0",
	},
}));

export const AdBannerContainer = styled(Box)(({ theme }) => ({
	marginTop: "16px",

	[theme.breakpoints.up("md")]: {
		marginTop: "24px",
	},
}));
