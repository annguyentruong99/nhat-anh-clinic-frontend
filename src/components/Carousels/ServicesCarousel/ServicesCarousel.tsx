import { SwiperProps } from "swiper/react";
import { Scrollbar, Virtual } from "swiper";
import ServiceCard from "src/components/ServiceCard";
import { Services } from "src/typings/services.types";
import Carousel from "../Carousel";

import { useMediaQuery, useTheme } from "@mui/material";
import { useRef, useState } from "react";

interface Props {
	services: Services;
}

const ServicesCarousel: React.FC<Props> = ({
	services: { data: servicesData },
}) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

	const [slides, setSlides] = useState(
		servicesData.map((service, ind) => (
			<ServiceCard key={ind} service={service} index={ind + 1} />
		)),
	);

	const appendNumber = useRef(servicesData.length);

	const appendSlide = () => {
		setSlides([...slides, <span key={++appendNumber.current}></span>]);
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
		<Carousel
			identifierClass='services-carousel'
			slides={slides}
			swiperProps={swiperProps}
		/>
	);
};

export default ServicesCarousel;
