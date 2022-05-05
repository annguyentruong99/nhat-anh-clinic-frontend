import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface Props {
	facebook: string;
	instagram: string;
}

const SocialMediaInfo: React.FC<Props> = ({ facebook, instagram }) => {
	return (
		<Grid
			item
			container
			gap={2}
			direction='column'
			alignItems='flex-start'
			xs={12}
			md={6}
			lg={2}>
			<Typography
				sx={{ color: "warning.main", fontWeight: 700 }}
				variant='body1'>
				Tìm hiểu thêm về chúng tôi
			</Typography>
			<Typography sx={{ color: "grey.0" }} variant='body2'>
				Facebook:&nbsp;{facebook}
			</Typography>
			<Typography sx={{ color: "grey.0" }} variant='body2'>
				Instagram:&nbsp;{instagram}
			</Typography>
		</Grid>
	);
};

export default SocialMediaInfo;
