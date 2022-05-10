import SectionHeading from "src/components/SectionHeading";
import { StyledBox } from "./styles";

import Container from "@mui/material/Container";
import { ModuleProps } from "./ModuleServicesSlider.types";
import { Services } from "src/typings/services.types";
import ServicesCarousel from "src/components/ServicesCarousel";

interface Props {
	moduleProps: ModuleProps;
	services: Services;
}

const ModuleServicesSlider: React.FC<Props> = ({
	moduleProps: { heading },
	services,
}) => {
	return (
		<StyledBox>
			<Container sx={{ overflow: "visible" }}>
				<SectionHeading heading={heading} />
				<ServicesCarousel services={services} />
			</Container>
		</StyledBox>
	);
};

export default ModuleServicesSlider;
