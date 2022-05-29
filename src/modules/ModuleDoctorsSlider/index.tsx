import { useState, useEffect } from "react";
import { Doctors } from "src/typings/doctors.types";
import { ModuleProps } from "./ModuleDoctorsSlider.types";
import DoctorsCarousel from "src/components/DoctorsCarousel";
import SectionHeading from "src/components/SectionHeading";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
	moduleProps: ModuleProps;
	doctors: Doctors[];
}

const ModuleDoctorsSlider: React.FC<Props> = ({
	moduleProps: { heading },
	doctors,
}) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const [doctorsData, setDoctorsData] = useState<Doctors[]>([]);

	useEffect(() => {
		if (Boolean(doctors.length)) {
			setDoctorsData(doctors);
		}
	}, [doctors]);

	return (
		<Box>
			<Container>
				<SectionHeading
					heading={heading}
					align={isDesktop ? "center" : "left"}
				/>
				<DoctorsCarousel doctors={doctorsData} />
			</Container>
		</Box>
	);
};

export default ModuleDoctorsSlider;
