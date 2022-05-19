import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export const StyledCard = styled(Card)(({ theme }) => ({
	border: `1px solid ${theme.palette.grey[200]}`,
}));

export const CardMediaContainer = styled(Box)(({ theme }) => ({
	overflow: "hidden",
	width: "100%",
	cursor: "pointer",
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
	transition: "all 0.3s",
	transform: "scale(1)",

	"&:hover": {
		transform: "scale(1.1)",
	},
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
	padding: "24px",
	overflow: "hidden",
}));

export const Title = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.darker,
	fontWeight: 700,
	cursor: "pointer",
}));

export const PreviewContent = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[500],
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
	width: "50%",
	padding: "0 24px 24px 24px",

	[theme.breakpoints.up("md")]: {
		display: "none",
	},
}));
