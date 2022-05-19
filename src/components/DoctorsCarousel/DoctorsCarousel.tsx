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

import { SxProps, Theme, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import { Doctors } from "src/typings/doctors.types";
import DoctorCard from "../DoctorCard";

interface Props {
	doctors: Doctors;
}

const DoctorsCarousel: React.FC<Props> = ({
	doctors: { data: doctorsData },
}) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

	const [swiper, setSwiper] = useState(null);

	useEffect(() => {
		setSwiper(document.querySelector(".doctors-carousel")?.swiper);
	}, []);

	const [slides, setSlides] = useState(
		doctorsData.map((doctor, ind) => <DoctorCard key={ind} doctor={doctor} />),
	);

	const appendNumber = useRef(doctorsData.length);

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
		marginBottom: "80px",

		"& .swiper": {
			height: "600px",
			"& .swiper-wrapper": {
				"& .swiper-slide": {
					width: { md: "fit-content !important" },
				},
			},
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
				slidesPerView: 2,
				spaceBetween: 35,
			},
			"@1.00": {
				slidesPerView: 3,
				spaceBetween: 10,
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
		className: "doctors-carousel",
	};

	return (
		<CarouselContainer
			sx={{
				...paginationStyles,
			}}>
			<Swiper {...swiperProps}>
				{slides.slice(0, doctorsData.length + 1).map((slide, ind) => (
					<SwiperSlide virtualIndex={ind} key={ind}>
						{slide}
					</SwiperSlide>
				))}
			</Swiper>
			<HideInMobile>
				<NavigationContainer>
					<Box
						sx={{ ...navigationButtonStyles, marginRight: "8px" }}
						onClick={slidePrev}>
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

export default DoctorsCarousel;
