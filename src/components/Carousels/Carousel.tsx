import { useState, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import {
	CarouselContainer,
	HideInMobile,
	NavigationContainer,
	navigationButtonStyles,
} from "./styles";
import LeftArrow from "src/components/icons/LeftArrow";
import RightArrow from "src/components/icons/RightArrow";

import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material";

interface Props {
	swiperProps: SwiperProps;
	slides: JSX.Element[];
	identifierClass: string;
}

const Carousel: React.FC<Props> = ({
	swiperProps,
	slides,
	identifierClass,
}) => {
	const [swiper, setSwiper] = useState(null);

	useEffect(() => {
		setSwiper(document.querySelector(`.${identifierClass}`)?.swiper);
	}, [identifierClass]);

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

	return (
		<CarouselContainer sx={{ ...paginationStyles }}>
			<Swiper {...swiperProps}>
				{slides.map((slide, ind) => (
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
