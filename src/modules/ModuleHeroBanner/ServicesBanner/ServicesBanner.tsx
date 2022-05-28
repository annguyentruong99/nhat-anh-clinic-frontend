import Image from "next/image";
import { ModuleProps } from "../ModuleHeroBanner.types";
import { StyledBox, TitleContainer } from "./styles";
import Title from "src/components/Title";

import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ServicesBanner: React.FC<ModuleProps> = ({
	title,
	cover: {
		data: {
			attributes: { url, alternativeText },
		},
	},
}) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
	const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

	return (
		<StyledBox
			sx={{
				backgroundImage: {
					xs: "url(https://storage.googleapis.com/nhat-anh-media/primary_light_bg_8d6409e212/primary_light_bg_8d6409e212.png)",
					lg: "url(https://storage.googleapis.com/nhat-anh-media/primary_light_bg_8d6409e212/primary_light_bg_8d6409e212.png), url(https://storage.googleapis.com/nhat-anh-media/abstract_5_73386e7e37/abstract_5_73386e7e37.png), url(https://storage.googleapis.com/nhat-anh-media/abstract_4_d5fec5a262/abstract_4_d5fec5a262.png)",
				},
				backgroundRepeat: "no-repeat",
				backgroundSize: {
					xs: "100% 276px",
					lg: "1000px 550px, 133px 180px, 249px 356px",
				},
				backgroundPosition: { lg: "top left, bottom left, 100% 35%" },
			}}>
			<Container>
				<TitleContainer>
					<Title
						variant='h1'
						title1={title.title1}
						title2={title.title2}
						highlightedText='title1'
						sx={{ fontSize: { md: "60px" }, lineHeight: { md: "80px" } }}
					/>
				</TitleContainer>

				<Image
					src={
						process.env.NODE_ENV === "production"
							? url
							: `http://localhost:1337${url}`
					}
					alt={alternativeText}
					width='1240'
					height={isDesktop ? "500" : isTablet ? "380" : "600"}
					objectFit='cover'
					objectPosition='center'
				/>
			</Container>
		</StyledBox>
	);
};

export default ServicesBanner;
