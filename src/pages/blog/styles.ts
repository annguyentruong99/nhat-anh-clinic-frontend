import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const StyledContainer = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("xl")]: {
		backgroundImage:
			"url(http://localhost:1337/uploads/abstract_3_9c6dba9d3f.png)",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "top right",
		backgroundSize: "143px 180px",
	},
}));

export const BreadcrumbsContainer = styled(Box)(({ theme }) => ({
	marginTop: "16px",

	[theme.breakpoints.up("md")]: {
		marginTop: "40px",
	},
}));

export const PostContentContainer = styled(Box)(({ theme }) => ({
	"& h2, h3, h4, h5, h6": {
		color: theme.palette.warning.main,
	},
	"& p": {
		color: theme.palette.grey[700],
	},
	"& img": {
		width: "100%",
	},
}));

export const Title = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.darker,
	margin: "24px 0",
}));

export const PostSuggestionsContainer = styled(Box)(({ theme }) => ({
	margin: "40px 0",

	[theme.breakpoints.up("md")]: {
		margin: "100px 0",
	},
}));