import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Title1 = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.darker,
}));

export const Title2 = styled(Typography)(({ theme }) => ({
	color: theme.palette.error.main,
}));
