import Image from "next/image";
import { StyledBox, LoaderContainer, StyledProgress } from "./styles";
import Logo from "public/assets/logo.jpg";

const LoadingScreen: React.FC = () => {
	return (
		<StyledBox>
			<LoaderContainer>
				<Image src={Logo} width='100' height='100' alt='Loading screen logo' />
				<StyledProgress size={110} />
			</LoaderContainer>
		</StyledBox>
	);
};

export default LoadingScreen;
