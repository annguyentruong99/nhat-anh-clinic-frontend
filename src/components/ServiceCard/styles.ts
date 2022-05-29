import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";


export const StyledCard = styled(Card)(({ theme }) => ({
	width: "300px",
	border: `1px solid ${theme.palette.grey[200]}`,

	[theme.breakpoints.up("md")]: {
		width: "100%",
	},
}));

export const StyledCardContent = styled(CardContent)({
	padding: "24px 24px 0 24px",
});

export const StyledCardActions = styled(CardActions)({
	padding: "12px 24px 24px 24px",
});

export const Index = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[100],
	fontWeight: 600,
	marginBottom: "20px",
}));

export const ServiceName = styled(Typography)(({ theme }) => ({
	fontWeight: 600,
	color: theme.palette.primary.darker,
}));
