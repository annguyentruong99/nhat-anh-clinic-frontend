import Link from "next/link";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { footerLinks } from "public/static/footerLinks";

const OurServices = () => {
	return (
		<Grid
			item
			container
			gap={2}
			direction='column'
			justifyContent='center'
			alignItems='flex-start'
			xs={12}
			md={6}
			lg={2}>
			<Typography
				sx={{ color: "warning.main", fontWeight: 700 }}
				variant='body1'>
				Dịch vụ của chúng tôi
			</Typography>

			{footerLinks.map((link) => (
				<Typography key={link.href} sx={{ color: "grey.0" }} variant='body2'>
					{link.title}
				</Typography>
			))}
		</Grid>
	);
};

export default OurServices;
