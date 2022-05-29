import Image from "next/image";
import Logo from "public/assets/logo.jpg";
import Button from "src/components/Button";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Custom404Page = () => {
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Image src={Logo} alt='Nhat Anh Logo' height={100} width={100} />
				<Typography
					variant='h1'
					sx={{ marginTop: "16px", color: "primary.darker" }}>
					Xin lỗi! Trang bạn đang truy cập không tồn tại
				</Typography>
				<Box sx={{ marginTop: "32px" }}>
					<Button href='/'>Quay trở lại trang chủ</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Custom404Page;
