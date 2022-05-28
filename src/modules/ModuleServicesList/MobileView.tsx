import { useState, useEffect } from "react";
import { Services } from "src/typings/services.types";
import ServicesCarousel from "src/components/ServicesCarousel";
import ServiceCard from "src/components/ServiceCard";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface Props {
	specializedServicesHeading: string;
	technicalServicesHeading: string;
	groupServicesHeading: string;
	services: Services[];
}

const MobileView: React.FC<Props> = ({
	services,
	specializedServicesHeading,
	technicalServicesHeading,
	groupServicesHeading,
}) => {
	const [specializedServices, setSpecializedServices] = useState<Services[]>(
		[],
	);
	const [technicalServices, setTechnicalServices] = useState<Services[]>([]);
	const [groupServices, setGroupServices] = useState<Services[]>([]);

	useEffect(() => {
		setSpecializedServices(
			services.filter(
				(service) => service.attributes.type === "Khám chuyên khoa",
			),
		);
		setTechnicalServices(
			services.filter((service) => service.attributes.type === "Khám kĩ thuật"),
		);
		setGroupServices(
			services.filter((service) => service.attributes.type === "Khám dịch vụ"),
		);
	}, [services]);

	return (
		<Box>
			<Box>
				<Typography variant='h3'>{specializedServicesHeading}</Typography>
				<ServicesCarousel
					services={specializedServices}
					indexSlides={false}
					showPagination={false}
				/>
			</Box>
			<Box>
				<Typography variant='h3'>{technicalServicesHeading}</Typography>
				<ServicesCarousel
					services={technicalServices}
					indexSlides={false}
					showPagination={false}
				/>
			</Box>
			<Box>
				<Typography variant='h3'>{groupServicesHeading}</Typography>
				<ServicesCarousel
					services={groupServices}
					indexSlides={false}
					showPagination={false}
				/>
			</Box>
		</Box>
	);
};

export default MobileView;
