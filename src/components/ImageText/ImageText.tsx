import Image from "next/image";
import {
	ImageTextContainer,
	CoverContainer,
	Title,
	Description,
} from "./styles";

interface Props {
	cover: string;
	title: string;
	description: string;
}

const ImageText: React.FC<Props> = ({ cover, title, description }) => {
	return (
		<ImageTextContainer>
			<CoverContainer>
				<Image src={cover} alt='Ảnh Dịch Vụ' height={213} width={213} />
			</CoverContainer>
			<Title variant='h2'>{title}</Title>
			<Description variant='body2'>{description}</Description>
		</ImageTextContainer>
	);
};

export default ImageText;
