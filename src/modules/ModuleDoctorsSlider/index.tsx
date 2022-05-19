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
	doctors: Doctors;
}

const ModuleDoctorsSlider: React.FC<Props> = ({
	moduleProps: { doctorsSliderHeading },
	doctors,
}) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<StyledBox>
			<Container>
				<SectionHeading
					heading={doctorsSliderHeading}
					align={isDesktop ? "center" : "left"}
				/>
				<DoctorsCarousel doctors={doctors} />
			</Container>
		</StyledBox>
	);
};

export default ModuleDoctorsSlider;