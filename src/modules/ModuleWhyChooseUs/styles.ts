import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const StyledBox = styled(Box)(({ theme }) => ({
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundAttachment: "fixed",
	backgroundPosition: "center center",
	boxShadow: "inset 0 0 0 50vw rgba(0, 0, 0, 0.8)",
	height: "fit-content",
	paddingBottom: "",
}));

export const ImageTextContainer = styled(Grid)(({ theme }) => ({
	padding: "24px 0 18px 0",

	[theme.breakpoints.up("lg")]: {
		padding: "60px 0 80px 0",
	},
}));
