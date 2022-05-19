import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "160px",
	borderRadius: "4px",

	[theme.breakpoints.up("md")]: {
		height: "400px",
	},
}));
