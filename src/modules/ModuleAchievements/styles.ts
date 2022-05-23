import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const TitleContainer = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		width: "83%",
	},
}));

export const Title1 = styled(Typography)(({ theme }) => ({
	display: "inline",
	color: theme.palette.primary.darker,
	paddingTop: "40px",
	maxWidth: "485px",

	[theme.breakpoints.up("md")]: {
		paddingTop: 0,
	},
}));

export const Title2 = styled(Typography)(({ theme }) => ({
	display: "inline",
	color: theme.palette.error.main,
}));

export const IconTextContainer = styled(Grid)(({ theme }) => ({
	marginTop: "40px",
	maxWidth: "520px",
	[theme.breakpoints.up("md")]: {
		marginTop: "60px",
	},
}));
