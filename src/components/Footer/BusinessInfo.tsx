import Image from "next/image";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CommerceCert from "public/assets/bo-cong-thuong.png";

interface Props {
	taxNumber: string;
	commerceLicense: string;
}

const BusinessInfo: React.FC<Props> = ({ taxNumber, commerceLicense }) => {
	return (
		<Grid
			item
			container
			direction='column'
			alignItems='flex-start'
			xs={12}
			md={6}
			lg={3}>
			<Typography
				sx={{ color: "grey.0", fontWeight: 700, marginBottom: "16px" }}
				variant='body1'>
				PHÒNG KHÁM ĐA KHOA NHẬT ANH
			</Typography>

			<Grid
				sx={{ marginBottom: "8px" }}
				container
				item
				gap={1}
				direction='row'
				alignItems='center'>
				<Typography sx={{ color: "grey.300" }} variant='body2'>
					Mã số thuế
				</Typography>
				<Typography sx={{ color: "grey.0" }} variant='body2'>
					{taxNumber}
				</Typography>
			</Grid>

			<Grid
				sx={{ marginBottom: "37px" }}
				container
				item
				gap={1}
				direction='row'
				alignItems='center'>
				<Typography sx={{ color: "grey.300" }} variant='body2'>
					Giấy phép kinh doanh
				</Typography>
				<Typography sx={{ color: "grey.0" }} variant='body2'>
					{commerceLicense}
				</Typography>
			</Grid>

			<Image src={CommerceCert} alt='Bộ Công Thương' />
		</Grid>
	);
};

export default BusinessInfo;
