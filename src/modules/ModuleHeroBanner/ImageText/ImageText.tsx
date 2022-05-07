import Image from "next/image";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Button from "src/components/Button";

import Banner from "public/assets/Banner.png";

import { ModuleProps } from "../ModuleHeroBanner.types";

import {
	StyledBox,
	Subtitle,
	TitleContainer,
	Title1,
	Title2,
	Description,
	CtaContainer,
	HeroImageContainer,
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
				backgroundImage: `url(http://localhost:1337${cover.data?.attributes?.url})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: { xs: "bottom center", lg: "bottom right" },
				backgroundSize: { xs: "380px 340px", lg: "auto" },
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
