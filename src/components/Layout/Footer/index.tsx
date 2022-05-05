import Copyright from "../Copyright";
import BusinessInfo from "./BusinessInfo";
import ContactInfo from "./ContactInfo";
import OurServices from "./OurServices";
import SocialMediaInfo from "./SocialMediaInfo";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { FooterProps } from "./Footer.types";

const Footer: React.FC<FooterProps> = ({
	taxNumber,
	commerceLicense,
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
				padding: { xs: "24px 81px 40px 16px", lg: "80px 100px 47px 100px" },
			}}>
			<Grid
				container
				gap={5}
				direction='row'
				justifyContent='space-evenly'
				alignItems='flex-start'>
				<BusinessInfo taxNumber={taxNumber} commerceLicense={commerceLicense} />

				<ContactInfo address={address} phone={phone} email={email} />

				<OurServices />
				<SocialMediaInfo facebook={facebook} instagram={instagram} />
			</Grid>
		</Box>
		<Divider sx={{ borderColor: "grey.400" }} />
		<Copyright />
	</footer>
);

export default Footer;
