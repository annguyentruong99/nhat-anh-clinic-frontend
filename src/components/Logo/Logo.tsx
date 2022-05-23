import Image from "next/image";
import Link from "next/link";

import LogoImg from "public/assets/logo-2.png";

const Logo = () => (
	<Link href='/' passHref>
		<Image src={LogoImg} alt='PKDK Nhật Anh Logo' height={42} width={130} />
	</Link>
);

export default Logo;
