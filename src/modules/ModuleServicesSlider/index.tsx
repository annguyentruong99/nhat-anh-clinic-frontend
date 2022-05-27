import { useState, useEffect } from "react";
import SectionHeading from "src/components/SectionHeading";
import ServicesCarousel from "src/components/ServicesCarousel";
import { Services } from "src/typings/services.types";
import { ModuleProps } from "./ModuleServicesSlider.types";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
	moduleProps: ModuleProps;
	services: Services[];
}

const ModuleServicesSlider: React.FC<Props> = ({
	moduleProps: { heading },
	services,
}) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const [servicesData, setServicesData] = useState<Services[]>([]);

	useEffect(() => {
		if (Boolean(services.length)) {
			setServicesData(services);
		}
	}, [services]);

	return (
		<Box>
			<Container>
				<SectionHeading
					heading={heading}
					align={isDesktop ? "center" : "left"}
				/>
				<ServicesCarousel services={servicesData} />
			</Container>
		</Box>
	);
};

export default ModuleServicesSlider;
