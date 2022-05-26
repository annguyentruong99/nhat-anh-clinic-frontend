import { ModuleProps } from "./ModuleAds.types";
import { StyledBox, AdBannerContainer } from "./styles";
import AdBanner from "src/components/AdBanner";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

interface Props {
	moduleProps: ModuleProps;
}

const ModuleAds: React.FC<Props> = ({ moduleProps: { heading, ads } }) => {
	return (
		<StyledBox>
			<Container>
				<Typography variant='h3'>{heading.title}</Typography>
				{ads.map((ad, ind) => (
					<AdBannerContainer key={ind}>
						<AdBanner cover={ad.cover} />
					</AdBannerContainer>
				))}
			</Container>
		</StyledBox>
	);
};

export default ModuleAds;
