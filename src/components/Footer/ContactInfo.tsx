import Link from "next/link";

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
				<Link
					href='https://www.google.com/maps?q=20+Ngô+Quyền,+phường+6,+Quận+5,+Thành+phố+Hồ+Chí+Minh,+Viet+Nam'
					passHref>
					<Typography
						sx={{
							color: "grey.0",
							pl: "8px",
							cursor: "pointer",
							"&:hover": { color: "warning.main" },
						}}
						variant='body2'>
						{address}
					</Typography>
				</Link>
			</span>

			<span style={{ display: "flex" }}>
				<span>
					<Phone />
				</span>
				<Link href={`tel:${phone.replace(".", "")}`} passHref>
					<Typography
						sx={{
							color: "grey.0",
							pl: "8px",
							cursor: "pointer",
							"&:hover": { color: "warning.main" },
						}}
						variant='body2'>
						{phone}
					</Typography>
				</Link>
			</span>

			<span style={{ display: "flex" }}>
				<span>
					<Email />
				</span>
				<Link href={`mailto:${email}`} passHref>
					<Typography
						sx={{
							color: "grey.0",
							pl: "8px",
							cursor: "pointer",
							"&:hover": { color: "warning.main" },
						}}
						variant='body2'>
						{email}
					</Typography>
				</Link>
			</span>
		</Grid>
	);
};

export default ContactInfo;
