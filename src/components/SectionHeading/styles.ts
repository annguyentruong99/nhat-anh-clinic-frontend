import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const StyledBox = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	paddingTop: "38px",

	[theme.breakpoints.up("md")]: {
		paddingTop: "100px",
		alignItems: "center",
	},
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		textAlign: "center",
		width: "55%",
	},
}));
