import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		backgroundImage:
			"url(https://storage.googleapis.com/nhat-anh-media/abstract_1_2ea87dabe4/abstract_1_2ea87dabe4.png)",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "top left",
		backgroundSize: "110px 205px",
	},
}));
