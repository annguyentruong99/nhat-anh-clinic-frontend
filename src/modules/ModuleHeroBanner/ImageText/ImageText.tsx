import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Button from "src/components/Button";

import { ModuleProps } from "../ModuleHeroBanner.types";

import {
	StyledBox,
	Subtitle,
	TitleContainer,
	Title1,
	Title2,
	Description,
	CtaContainer,
} from "./styles";

const ImageText: React.FC<ModuleProps> = ({
	subtitle,
	title,
	cover,
	description,
	cta,
}) => {
	return (
		<StyledBox
			sx={{
				backgroundImage:
					process.env.NODE_ENV === "production"
						? `url(${cover.data?.attributes?.url})`
						: `url(http://localhost:1337${cover.data?.attributes?.url})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: { xs: "70% 100%", md: "50% 100%", lg: "85% 100%" },
				backgroundSize: { xs: "500px 310px", lg: "auto" },
			}}>
			<Container>
				<Grid container direction='row' alignItems='center'>
					<Grid
						item
						container
						direction='column'
						justifyContent='flex-start'
						xs={12}
						lg={7}>
						<Subtitle variant='caption'>{subtitle}</Subtitle>

						<TitleContainer>
							<Title1>{title.title1}</Title1>
							<Title2>{title.title2}</Title2>
						</TitleContainer>

						<Description variant='caption'>{description}</Description>

						<CtaContainer>
							<Button href={cta?.link}>{cta?.content}</Button>
						</CtaContainer>
					</Grid>
				</Grid>
			</Container>
		</StyledBox>
	);
};

export default ImageText;
