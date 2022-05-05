import Image from "next/image";
import Link from "next/link";

import LogoImg from "public/assets/logo.png";

const Logo = () => (
	<Link href='/'>
		<Image src={LogoImg} alt='PKDK Nhật Anh Logo' />
	</Link>
);

export default Logo;
