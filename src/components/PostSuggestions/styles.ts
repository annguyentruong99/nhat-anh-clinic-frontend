import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Heading = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[700],
}));

export const PostCardsContainer = styled(Grid)(({ theme }) => ({
	marginTop: "16px",
}));
