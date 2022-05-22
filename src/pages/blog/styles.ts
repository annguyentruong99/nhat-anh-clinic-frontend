import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const PostContentContainer = styled(Box)(({ theme }) => ({
	"& h3": {
		color: theme.palette.warning.main,
	},
	"& p": {
		color: theme.palette.grey[700],
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