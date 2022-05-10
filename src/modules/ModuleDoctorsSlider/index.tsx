import { Doctors } from "src/typings/doctors.types";
import { ModuleProps } from "./ModuleDoctorsSlider.types";
import { StyledBox } from "./styles";

import Container from "@mui/material/Container";
import SectionHeading from "src/components/SectionHeading";

interface Props {
	moduleProps: ModuleProps;
	doctors: Doctors;
}

const ModuleDoctorsSlider: React.FC<Props> = ({
	moduleProps: { heading },
	doctors,
}) => {
	return (
		<StyledBox>
			<Container>
				<SectionHeading heading={heading} />
			</Container>
		</StyledBox>
	);
};

export default ModuleDoctorsSlider;
