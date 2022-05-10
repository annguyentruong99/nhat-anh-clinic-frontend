import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Scrollbar, Virtual } from "swiper";

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
import { useEffect, useRef, useState } from "react";
import { Services } from "src/typings/services.types";

interface Props {
	services: Services;
}

const Carousel: React.FC<Props> = ({ services: { data: servicesData } }) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
	const isTablet = useMediaQuery(theme.breakpoints.up("md"));

	const [swiper, setSwiper] = useState(null);

	useEffect(() => {
		setSwiper(document.querySelector(".services-carousel")?.swiper);
	}, []);

	const [slides, setSlides] = useState(
		servicesData.map((service, ind) => (
			<ServiceCard key={ind} service={service} index={ind + 1} />
		)),
	);

	const appendNumber = useRef(servicesData.length);

	const appendSlide = () => {
		setSlides([...slides, <span key={++appendNumber.current}></span>]);
	};

	const slidePrev = () => {
		swiper.slidePrev();
	};

	const slideNext = () => {
		swiper.slideNext();
	};

	const paginationStyles: SxProps<Theme> = {
		"& .swiper": {
			height: "565px",

			"& .swiper-scrollbar": {
				width: "88px",
				backgroundColor: (theme) => theme.palette.grey[100],
				left: "50%",
				transform: "translate(-50%, -50%)",

				"& .swiper-scrollbar-drag": {
					width: `${88 / slides.length}px`,
					backgroundColor: "primary.darker",
				},
			},
		},
	};

	const swiperProps: SwiperProps = {
		height: 575,
		slidesPerView: 2,
		spaceBetween: 280,
		breakpoints: {
			"@0.65": {
				slidesPerView: 2,
				spaceBetween: 100,
			},
			"@0.80": {
				slidesPerView: 3,
				spaceBetween: 35,
			},
			"@1.00": {
				slidesPerView: 3,
				spaceBetween: 100,
			},
		},
		watchOverflow: true,
		modules: [Scrollbar, Virtual],
		virtual: true,
		scrollbar: {
			draggable: true,
			hide: false,
			snapOnRelease: true,
		},
		onReachEnd: (swiper) => {
			if (!isDesktop && swiper.isEnd) {
				appendSlide();
			}
		},
		className: "services-carousel",
	};

	return (
		<CarouselContainer
			sx={{
				...paginationStyles,
			}}>
			<Swiper {...swiperProps}>
				{slides.slice(0, servicesData.length + 1).map((slide, ind) => (
					<SwiperSlide virtualIndex={ind} key={ind}>
						{slide}
					</SwiperSlide>
				))}
			</Swiper>
			<HideInMobile>
				<NavigationContainer>
					<Box sx={{ ...navigationButtonStyles }} onClick={slidePrev}>
						<LeftArrow />
					</Box>
					<Box sx={{ ...navigationButtonStyles }} onClick={slideNext}>
						<RightArrow />
					</Box>
				</NavigationContainer>
			</HideInMobile>
		</CarouselContainer>
	);
};

export default Carousel;