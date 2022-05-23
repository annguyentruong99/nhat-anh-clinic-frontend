import Link from "next/link";

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
			lg={3}>
			<Typography
				sx={{ color: "warning.main", fontWeight: 700 }}
				variant='body1'>
				Tìm hiểu thêm về chúng tôi
			</Typography>
			<Link href={`https://${facebook}`} passHref>
				<Typography
					sx={{
						color: "grey.0",
						cursor: "pointer",
						"&:hover": { color: "warning.main" },
					}}
					variant='body2'>
					Facebook:&nbsp;{facebook}
				</Typography>
			</Link>
			<Link href={`https://instagram.com/${instagram}`} passHref>
				<Typography
					sx={{
						color: "grey.0",
						cursor: "pointer",
						"&:hover": { color: "warning.main" },
					}}
					variant='body2'>
					Instagram:&nbsp;{instagram}
				</Typography>
			</Link>
		</Grid>
	);
};

export default SocialMediaInfo;
