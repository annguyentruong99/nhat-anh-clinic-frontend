import { Doctors } from "src/typings/doctors.types";
import { ModuleProps } from "./ModuleDoctorsSlider.types";
import { StyledBox } from "./styles";
import DoctorsCarousel from "src/components/DoctorsCarousel";

import Container from "@mui/material/Container";
import SectionHeading from "src/components/SectionHeading";

interface Props {
	moduleProps: ModuleProps;
	doctors: Doctors;
}

const ModuleDoctorsSlider: React.FC<Props> = ({
	moduleProps: { doctorsSliderHeading },
	doctors,
}) => {
	return (
		<StyledBox>
			<Container>
				<SectionHeading heading={doctorsSliderHeading} />
				<DoctorsCarousel doctors={doctors} />
			</Container>
		</StyledBox>
	);
};

export default ModuleDoctorsSlider;
