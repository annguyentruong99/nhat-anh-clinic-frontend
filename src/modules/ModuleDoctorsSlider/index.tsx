import { useState, useEffect } from "react";
import { Doctors } from "src/typings/doctors.types";
import { ModuleProps } from "./ModuleDoctorsSlider.types";
import { StyledBox } from "./styles";
import DoctorsCarousel from "src/components/DoctorsCarousel";
import SectionHeading from "src/components/SectionHeading";

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
		<StyledBox>
			<Container>
				<SectionHeading
					heading={heading}
					align={isDesktop ? "center" : "left"}
				/>
				<DoctorsCarousel doctors={doctorsData} />
			</Container>
		</StyledBox>
	);
};

export default ModuleDoctorsSlider;
