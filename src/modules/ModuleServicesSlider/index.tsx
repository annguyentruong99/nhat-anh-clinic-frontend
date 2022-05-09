import SectionHeading from "src/components/SectionHeading";
import { StyledBox } from "./styles";

import Container from "@mui/material/Container";

import { ModuleProps } from "./ModuleServicesSlider.types";
import { Services } from "src/typings/services.types";
import ServiceCard from "src/components/ServiceCard";

interface Props {
	moduleProps: ModuleProps;
	services: Services;
}

const ModuleServicesSlider: React.FC<Props> = ({
	moduleProps: { heading },
	services: { data: services },
}) => {
	return (
		<StyledBox>
			<Container>
				<SectionHeading heading={heading} />
				{services.map((service, ind) => (
					<ServiceCard
						key={service.attributes.name}
						service={service}
						index={ind + 1}
					/>
				))}
			</Container>
		</StyledBox>
	);
};

export default ModuleServicesSlider;
