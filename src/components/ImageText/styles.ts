import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ImageTextContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginBottom: "40px",

	[theme.breakpoints.up("lg")]: {
		marginBottom: 0,
	},
}));

export const CoverContainer = styled("span")(({ theme }) => ({
	border: `1px solid ${theme.palette.grey[0]}`,
	borderRadius: "100%",
	padding: "5px",
	marginBottom: "24px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

export const Title = styled(Typography)(({ theme }) => ({
	color: theme.palette.warning.main,
	marginBottom: "8px",
}));

export const Description = styled(Typography)(({ theme }) => ({
	textAlign: "center",
	color: theme.palette.grey[200],
	maxWidth: "260px",
}));
