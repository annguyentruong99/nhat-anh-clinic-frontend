import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ContentContainer = styled(Box)(({ theme }) => ({
	minHeight: "400px",
}));

export const Description = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[600],
	width: "90%",
	marginTop: "12px",
}));

export const CtaContainer = styled(Box)(({ theme }) => ({
	marginTop: "40px",
	width: "60%",

	[theme.breakpoints.up("md")]: {
		width: "30%",
	},
}));
