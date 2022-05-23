import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Title1 = styled(Typography)(({ theme }) => ({
	display: "inline",
	color: theme.palette.primary.darker,
}));

export const Title2 = styled(Typography)(({ theme }) => ({
	display: "inline",
	color: theme.palette.error.main,
}));
