import { Cover } from "src/typings/common.types";
import {
	StyledBox,
	ContentContainer,
	ServiceHighlightsContainer,
} from "./styles";
import Title from "src/components/Title";
import ServiceHighlights from "src/components/ServiceHighlights";

import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
	title: {
		title1: string;
		title2: string;
	};
	cover: Cover;
	highlights: {
		id: number;
		text: string;
	}[];
}

const ServiceBanner: React.FC<Props> = ({
	title: { title1, title2 },
	cover: {
		data: {
			attributes: { url },
		},
	},
	highlights,
}) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<StyledBox
			sx={{
				backgroundImage: {
					md:
						process.env.NODE_ENV === "production"
							? `url(${url})`
							: `url(http://localhost:1337${url})`,
				},
			}}>
			<Container>
				<ContentContainer>
					<Title
						inline={!isMobile}
						title1={title1}
						title2={title2}
						variant='h1'
						sx={{ fontSize: { md: "60px" } }}
					/>
					<ServiceHighlightsContainer>
						<ServiceHighlights highlights={highlights} />
					</ServiceHighlightsContainer>
				</ContentContainer>
			</Container>
		</StyledBox>
	);
};

export default ServiceBanner;
