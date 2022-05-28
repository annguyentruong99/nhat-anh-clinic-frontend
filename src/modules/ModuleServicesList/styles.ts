import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const StyledBox = styled(Box)(({ theme }) => ({
	marginTop: "40px",

	[theme.breakpoints.up("md")]: {
		marginTop: "50px",
		backgroundImage:
			"url(https://storage.googleapis.com/nhat-anh-media/abstract_2_ebd3522e0e/abstract_2_ebd3522e0e.png)",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "bottom right",
	},
}));

export const TabsNavigation = styled(Grid)(({ theme }) => ({
	height: "fit-content",
	"& ul": {
		listStyle: "none",
		padding: 0,
		margin: 0,
		"& li": {
			marginBottom: "16px",
			padding: "16px 12px",
			"& a": {
				fontSize: "16px",
				fontWeight: 500,
				color: theme.palette.grey[400],
				textDecoration: "none",
				width: "100%",
			},
			'&[class="active"]': {
				backgroundColor: theme.palette.primary.main,
				borderRadius: "4px",
				"& a": {
					color: theme.palette.grey[0],
					fontWeight: 700,
				},
			},
		},
	},
}));

export const TabsContent = styled(Grid)({
	paddingLeft: "66px",
});

export const ServiceCardsContainer = styled(Grid)({
	marginTop: "16px",
});

export const AllServicesContainer = styled(Box)({
	padding: "32px 0 100px 0",
});

export const SingleServiceTypeContainer = styled(Box)({
	marginTop: "50px",
});