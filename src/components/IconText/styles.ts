import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const IconTextContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "start",
	width: "fit-content",
	marginBottom: "40px",
}));

export const IconContainer = styled("span")({
	width: "56px",
	height: "56px",
	marginBottom: "10px",
});

export const Title = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.darker,
}));

export const Description = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[500],
}));
