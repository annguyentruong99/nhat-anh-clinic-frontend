import { styled } from "@mui/material/styles";
import List from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

export const StyledList = styled(List)({
	minHeight: "104px",
	marginTop: "8px",
});

export const StyledListItem = styled(ListItem)({
	padding: 0,
	alignItems: "flex-start",
});

export const StyledListItemIcon = styled(ListItemIcon)({
	minWidth: "fit-content",
	marginRight: "4px",
	paddingTop: "6px",
});

export const Highlight = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[500],
}));
