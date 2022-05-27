import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Progress from "@mui/material/CircularProgress";

export const StyledBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

export const LoaderContainer = styled(Box)({
	position: "relative",
});

export const StyledProgress = styled(Progress)({
	position: "absolute",
	top: -6,
	left: -6,
	zIndex: 1,
});
