import { ModuleProps } from "./ModuleServiceInfo.types";
import ImageLeft from "src/components/ImageLeft";
import { ContentContainer, Description, CtaContainer } from "./styles";
import Title from "src/components/Title";
import Button from "src/components/Button";

interface Props {
	moduleProps: ModuleProps;
}

const ModuleServiceInfo: React.FC<Props> = ({
	moduleProps: {
		title: { title1, title2 },
		description,
		cta: { content, link },
		cover: {
			data: {
				attributes: { url },
			},
		},
	},
}) => {
	return (
		<ImageLeft imageUrl={url} showImageOnMobile>
			<ContentContainer>
				<Title variant='h1' title1={title1} title2={title2} inline={true} />
				<Description variant='body1'>{description}</Description>
				<CtaContainer>
					<Button href={link}>{content}</Button>
				</CtaContainer>
			</ContentContainer>
		</ImageLeft>
	);
};

export default ModuleServiceInfo;
