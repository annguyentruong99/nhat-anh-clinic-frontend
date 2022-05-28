import { useState, useEffect } from "react";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import { ModuleProps } from "./ModuleServicesList.types";
import { Services } from "src/typings/services.types";
import { StyledBox } from "./styles";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";

interface Props {
	moduleProps: ModuleProps;
	services: Services[];
}

const ModuleServicesList: React.FC<Props> = ({
	moduleProps: {
		groupServicesHeading,
		specializedServicesHeading,
		technicalServicesHeading,
	},
	services,
}) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
	const [servicesData, setServicesData] = useState<Services[]>([]);

	useEffect(() => {
		if (Boolean(services.length)) {
			setServicesData(services);
		}
	}, [services]);

	return (
		<StyledBox>
			<Container>
				{isDesktop ? (
					<DesktopView
						services={servicesData}
						specializedServicesHeading={specializedServicesHeading}
						technicalServicesHeading={technicalServicesHeading}
						groupServicesHeading={groupServicesHeading}
					/>
				) : (
					<MobileView
						specializedServicesHeading={specializedServicesHeading}
						technicalServicesHeading={technicalServicesHeading}
						groupServicesHeading={groupServicesHeading}
						services={servicesData}
					/>
				)}
			</Container>
		</StyledBox>
	);
};

export default ModuleServicesList;
