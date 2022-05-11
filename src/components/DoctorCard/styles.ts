import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export const StyledCard = styled(Card)(({ theme }) => ({
	display: "block",
	border: `1px solid ${theme.palette.grey[200]}`,
	width: "300px",
	height: "548px",

	[theme.breakpoints.up("md")]: {
		width: "375px",
	},
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
	padding: "24px 24px 0 24px",
	height: "fit-content",
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
	padding: "10px 24px 24px 24px",
	width: "100%",

	[theme.breakpoints.up("md")]: {
		width: "50%",
	},
}));

export const Role = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[500],
}));

export const Name = styled(Typography)(({ theme }) => ({
	textTransform: "uppercase",
	color: theme.palette.primary.darker,
	margin: "16px 0 8px 0",
}));

export const Description = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[500],
}));
