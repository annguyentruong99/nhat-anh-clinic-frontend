import Image from "next/image";
import { IconTextContainer, IconContainer, Title, Description } from "./styles";
import { Cover } from "src/typings/common.types";

interface Props {
	icon: Cover;
	title: string;
	description: string;
}

const IconText: React.FC<Props> = ({
	icon: {
		data: {
			attributes: { url },
		},
	},
	title,
	description,
}) => {
	return (
		<IconTextContainer>
			<IconContainer>
				<Image
					src={`http://localhost:1337${url}`}
					alt='achievements-icon'
					width={56}
					height={56}
				/>
			</IconContainer>
			<Title variant='h1'>{title}</Title>
			<Description variant='body2'>{description}</Description>
		</IconTextContainer>
	);
};

export default IconText;
