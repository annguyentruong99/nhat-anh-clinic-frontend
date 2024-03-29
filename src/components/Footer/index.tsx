import Copyright from "./Copyright";
import BusinessInfo from "./BusinessInfo";
import ContactInfo from "./ContactInfo";
import OurServices from "./OurServices";
import SocialMediaInfo from "./SocialMediaInfo";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { FooterProps } from "./Footer.types";

const Footer: React.FC<FooterProps> = ({
	taxNumber,
	address,
	phone,
	email,
	facebook,
	instagram,
}) => (
	<footer>
		<Box
			sx={{
				backgroundColor: "primary.darker",
				padding: { xs: "24px 0 40px 0", lg: "80px 0 47px 0" },
			}}>
			<Container>
				<Grid
					container
					gap={4}
					direction='row'
					justifyContent='space-between'
					alignItems='flex-start'>
					<BusinessInfo taxNumber={taxNumber} />

					<ContactInfo address={address} phone={phone} email={email} />

					<OurServices />
					<SocialMediaInfo facebook={facebook} instagram={instagram} />
				</Grid>
			</Container>
		</Box>
		<Divider sx={{ borderColor: "grey.400" }} />
		<Copyright />
	</footer>
);

export default Footer;
