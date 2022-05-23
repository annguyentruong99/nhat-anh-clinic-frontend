import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		backgroundImage:
			"url(http://localhost:1337/uploads/abstract_1_07cdc8770f.png)",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "top left",
		backgroundSize: "110px 205px",
	},
}));
