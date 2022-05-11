import SectionHeading from "src/components/SectionHeading";
import ServicesCarousel from "src/components/ServicesCarousel";
import { Services } from "src/typings/services.types";
import { ModuleProps } from "./ModuleServicesSlider.types";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

interface Props {
	moduleProps: ModuleProps;
	services: Services;
}

const ModuleServicesSlider: React.FC<Props> = ({
	moduleProps: { servicesSliderHeading },
	services,
}) => {
	return (
		<Box>
			<Container>
				<SectionHeading heading={servicesSliderHeading} />
				<ServicesCarousel services={services} />
			</Container>
		</Box>
	);
};

export default ModuleServicesSlider;
