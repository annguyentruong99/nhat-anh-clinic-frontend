import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import {
	CarouselContainer,
	navigationButtonStyles,
	NavigationContainer,
	HideInMobile,
} from "./styles";
import RightArrow from "../icons/RightArrow";
import LeftArrow from "../icons/LeftArrow";
import ServiceCard from "src/components/ServiceCard";

import { SxProps, Theme, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Services } from "src/typings/services.types";

interface Props {
	services: Services;
}

const Carousel: React.FC<Props> = ({ services: { data: servicesData } }) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const [swiper, setSwiper] = useState(null);

	useEffect(() => {
		setSwiper(document.querySelector(".services-carousel")?.swiper);
	}, []);

	const paginationStyles: SxProps<Theme> = {
		"& .swiper": {
			height: "565px",

			"& .swiper-scrollbar": {
				width: "88px",
				backgroundColor: (theme) => theme.palette.grey[100],
				left: "50%",
				transform: "translate(-50%, -50%)",

				"& .swiper-scrollbar-drag": {
					width: `${88 / servicesData.length}px`,
					backgroundColor: "primary.darker",
				},
			},
		},
	};

	const swiperProps: SwiperProps = {
		height: 575,
		slidesPerView: isDesktop ? 3 : 1,
		spaceBetween: isDesktop ? 100 : 50,
		initialSlide: isDesktop ? 2 : 0,
		watchOverflow: true,
		modules: [Scrollbar],
		scrollbar: {
			draggable: true,
			hide: false,
			snapOnRelease: true,
		},
		className: "services-carousel",
	};

	return (
		<CarouselContainer
			sx={{
				...paginationStyles,
			}}>
			<Swiper {...swiperProps}>
				{servicesData.map((service, ind) => (
					<SwiperSlide key={service.attributes.slug}>
						<ServiceCard service={service} index={ind + 1} />
					</SwiperSlide>
				))}
			</Swiper>
			<HideInMobile>
				<NavigationContainer>
					<Box
						sx={{ ...navigationButtonStyles }}
						onClick={() => swiper.slidePrev()}>
						<LeftArrow />
					</Box>
					<Box
						sx={{ ...navigationButtonStyles }}
						onClick={() => swiper.slideNext()}>
						<RightArrow />
					</Box>
				</NavigationContainer>
			</HideInMobile>
		</CarouselContainer>
	);
};

export default Carousel;
