import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Copyright = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Box
			sx={{
				backgroundColor: "primary.darker",
			}}>
			<Container>
				<Typography
					sx={{ color: "grey.0", padding: "20px" }}
					variant='body2'
					align='center'>
					{`Copyright ${currentYear} ©Phong kham Da khoa Nhat Anh. All rights reserved. `}
				</Typography>
			</Container>
		</Box>
	);
};

export default Copyright;
