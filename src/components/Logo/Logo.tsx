import Image from "next/image";
import Link from "next/link";

import Box from "@mui/material/Box";

import LogoImg from "public/assets/logo-2.png";

const Logo = () => (
	<Link href='/' passHref>
		<Box sx={{ cursor: "pointer" }}>
			<a>
				<Image src={LogoImg} alt='PKDK Nhật Anh Logo' height={42} width={130} />
			</a>
		</Box>
	</Link>
);

export default Logo;
