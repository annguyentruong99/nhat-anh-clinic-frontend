import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.darker,
	margin: "24px 0",
}));
