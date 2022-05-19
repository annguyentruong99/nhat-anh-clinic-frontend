import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.light,
	backgroundRepeat: "no-repeat",
	backgroundSize: "104px 104px",
	backgroundPosition: "bottom right",

	[theme.breakpoints.up("lg")]: {
		padding: "107px 0 67px 0",
		backgroundRepeat: "no-repeat, no-repeat",
		backgroundSize: "607px 600px, 209px 209px",
		backgroundPosition: "right bottom, 67% 100%",
	},
}));

export const Title1 = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.darker,
	paddingTop: "40px",
	maxWidth: "485px",

	[theme.breakpoints.up("md")]: {
		paddingTop: 0,
	},
}));

export const IconTextContainer = styled(Grid)(({ theme }) => ({
	marginTop: "40px",
	maxWidth: "520px",
	[theme.breakpoints.up("md")]: {
		marginTop: "60px",
	},
}));
