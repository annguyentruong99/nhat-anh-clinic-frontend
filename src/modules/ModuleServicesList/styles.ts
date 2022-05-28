import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
	marginTop: "40px",

	[theme.breakpoints.up("md")]: {
		marginTop: "50px",
	},
}));
