import SectionHeading from "src/components/SectionHeading";
import { ModuleProps } from "./ModuleWhyChooseUs.types";
import ImageText from "src/components/ImageText";
import { StyledBox, ImageTextContainer } from "./styles";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

interface Props {
	moduleProps: ModuleProps;
}

const ModuleWhyChooseUs: React.FC<Props> = ({
	moduleProps: { heading, backgroundImage, imageText },
}) => (
	<StyledBox
		sx={{
			backgroundImage:
				process.env.NODE_ENV === "production"
					? `url(${backgroundImage.data.attributes.url})`
					: `url(http://localhost:1337${backgroundImage.data.attributes.url})`,
		}}>
		<Container>
			<SectionHeading heading={heading} titleColor='white' align='center' />
			<ImageTextContainer container>
				{imageText.map((item) => (
					<Grid key={item.title} item xs={12} md={6} lg={3}>
						<ImageText
							title={item.title}
							cover={
								process.env.NODE_ENV === "production"
									? item.cover.data.attributes.url
									: `http://localhost:1337${item.cover.data.attributes.url}`
							}
							description={item.description}
						/>
					</Grid>
				))}
			</ImageTextContainer>
		</Container>
	</StyledBox>
);

export default ModuleWhyChooseUs;
