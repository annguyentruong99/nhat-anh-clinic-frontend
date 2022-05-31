import { useRouter } from "next/router";
import { ModuleProps } from "./ModuleAds.types";
import { StyledBox, AdBannerContainer } from "./styles";
import { usePostQuery } from "src/hooks";
import AdBanner from "src/components/AdBanner";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

interface Props {
	moduleProps: ModuleProps;
}

const ModuleAds: React.FC<Props> = ({ moduleProps: { heading, ads } }) => {
	const router = useRouter();
	const { query } = usePostQuery();

	return (
		<StyledBox
			sx={{
				display:
					Boolean(query.length) ||
					router.query.viewAll === "bai-viet-moi" ||
					router.query.viewAll === "bai-viet-noi-bat"
						? "none"
						: undefined,
			}}>
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
