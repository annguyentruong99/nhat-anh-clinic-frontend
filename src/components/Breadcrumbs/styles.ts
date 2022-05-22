import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const BreadCrumbLink = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.main,
	cursor: "pointer",
}));

export const LastBreadcrumb = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[700],
	maxWidth: "135px",
	overflow: "hidden",
	textOverflow: "ellipsis",
	[theme.breakpoints.up("sm")]: {
		maxWidth: "200px",
	},
	[theme.breakpoints.up("md")]: {
		maxWidth: "100%",
	},
}));
