import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const StyledBox = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	paddingTop: "38px",

	[theme.breakpoints.up("md")]: {
		paddingTop: "100px",
	},
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[400],
	[theme.breakpoints.up("md")]: {
		textAlign: "center",
		width: "55%",
	},
}));
