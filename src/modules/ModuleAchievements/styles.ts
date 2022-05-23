import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const TitleContainer = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		width: "83%",
	},
}));

export const IconTextContainer = styled(Grid)(({ theme }) => ({
	marginTop: "40px",
	maxWidth: "520px",
	[theme.breakpoints.up("md")]: {
		marginTop: "60px",
	},
}));
