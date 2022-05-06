import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Icons
import Location from "src/components/icons/Location";
import Phone from "src/components/icons/Phone";
import Email from "src/components/icons/Email";

interface Props {
	address: string;
	phone: string;
	email: string;
}

const ContactInfo: React.FC<Props> = ({ address, phone, email }) => {
	return (
		<Grid
			item
			container
			gap={2}
			direction='column'
			alignItems='flex-start'
			xs={12}
			md={6}
			lg={3}>
			<Typography
				sx={{ color: "warning.main", fontWeight: 700 }}
				variant='body1'>
				Thông tin liên hệ
			</Typography>

			<span style={{ display: "flex" }}>
				<span>
					<Location />
				</span>
				<Typography sx={{ color: "grey.0", pl: "8px" }} variant='body2'>
					{address}
				</Typography>
			</span>

			<span style={{ display: "flex" }}>
				<span>
					<Phone />
				</span>
				<Typography sx={{ color: "grey.0", pl: "8px" }} variant='body2'>
					{phone}
				</Typography>
			</span>

			<span style={{ display: "flex" }}>
				<span>
					<Email />
				</span>
				<Typography sx={{ color: "grey.0", pl: "8px" }} variant='body2'>
					{email}
				</Typography>
			</span>
		</Grid>
	);
};

export default ContactInfo;
