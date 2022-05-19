import SectionHeading from "src/components/SectionHeading";
import { ModuleProps } from "./ModuleWhyChooseUs.types";
import ImageText from "src/components/ImageText";
import { StyledBox, ImageTextContainer } from "./styles";

import Container from "@mui/material/Container";

interface Props {
	moduleProps: ModuleProps;
}

const ModuleWhyChooseUs: React.FC<Props> = ({
	moduleProps: { whyChooseUsHeading, backgroundImage, imageText },
}) => (
	<StyledBox
		sx={{
			backgroundImage: `url(http://localhost:1337${backgroundImage.data.attributes.url})`,
		}}>
		<Container>
			<SectionHeading
				heading={whyChooseUsHeading}
				titleColor='white'
				align='center'
			/>
			<ImageTextContainer>
				{imageText.map((item) => (
					<ImageText
						key={item.title}
						title={item.title}
						cover={`http://localhost:1337${item.cover.data.attributes.url}`}
						description={item.description}
					/>
				))}
			</ImageTextContainer>
		</Container>
	</StyledBox>
);

export default ModuleWhyChooseUs;
