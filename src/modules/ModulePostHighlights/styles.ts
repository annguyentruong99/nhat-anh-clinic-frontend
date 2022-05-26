import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const StyledBox = styled(Box)(({ theme }) => ({
	marginTop: "40px",

	[theme.breakpoints.up("md")]: {
		marginTop: "50px",
	},
}));

export const PostCardsContainer = styled(Grid)({
	marginTop: "1px",
});
