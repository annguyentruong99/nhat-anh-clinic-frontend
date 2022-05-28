import React, { useState, useEffect } from "react";
import { Services } from "src/typings/services.types";
import ServiceCard from "src/components/ServiceCard";
import Breadcrumbs from "src/components/Breadcrumbs";
import {
	TabsNavigation,
	TabsContent,
	ServiceCardsContainer,
	AllServicesContainer,
	SingleServiceTypeContainer,
} from "./styles";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

const tabsMap = [
	{
		title: "Tất cả các dịch vụ",
		tabNum: 0,
	},
	{
		title: "Khám chuyên khoa",
		tabNum: 1,
	},
	{
		title: "Khám kĩ thuật",
		tabNum: 2,
	},
	{
		title: "Khám dịch vụ",
		tabNum: 3,
	},
];

interface Props {
	specializedServicesHeading: string;
	technicalServicesHeading: string;
	groupServicesHeading: string;
	services: Services[];
}

const DesktopView: React.FC<Props> = ({
	services,
	specializedServicesHeading,
	technicalServicesHeading,
	groupServicesHeading,
}) => {
	const [activeTab, setActiveTab] = useState(0);
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

	const tabContentMap: { [index: number]: React.ReactNode } = {
		0: (
			<AllServicesContainer>
				<Box>
					<Typography variant='h3'>{specializedServicesHeading}</Typography>
					<ServiceCardsContainer container spacing={2}>
						{specializedServices.map((service) => (
							<Grid item md={4} key={service.attributes.slug}>
								<ServiceCard service={service} showIndex={false} />
							</Grid>
						))}
					</ServiceCardsContainer>
				</Box>
				<SingleServiceTypeContainer>
					<Typography variant='h3'>{technicalServicesHeading}</Typography>
					<ServiceCardsContainer container spacing={2}>
						{technicalServices.map((service) => (
							<Grid item md={4} key={service.attributes.slug}>
								<ServiceCard service={service} showIndex={false} />
							</Grid>
						))}
					</ServiceCardsContainer>
				</SingleServiceTypeContainer>
				<SingleServiceTypeContainer>
					<Typography variant='h3'>{groupServicesHeading}</Typography>
					<ServiceCardsContainer container spacing={2}>
						{groupServices.map((service) => (
							<Grid item md={4} key={service.attributes.slug}>
								<ServiceCard service={service} showIndex={false} />
							</Grid>
						))}
					</ServiceCardsContainer>
				</SingleServiceTypeContainer>
			</AllServicesContainer>
		),
		1: (
			<AllServicesContainer>
				<Grid container spacing={2}>
					{specializedServices.map((service) => (
						<Grid item md={4} key={service.attributes.slug}>
							<ServiceCard service={service} showIndex={false} />
						</Grid>
					))}
				</Grid>
			</AllServicesContainer>
		),
		2: (
			<AllServicesContainer>
				<Grid container spacing={2}>
					{technicalServices.map((service) => (
						<Grid item md={4} key={service.attributes.slug}>
							<ServiceCard service={service} showIndex={false} />
						</Grid>
					))}
				</Grid>
			</AllServicesContainer>
		),
		3: (
			<AllServicesContainer>
				<Grid container spacing={2}>
					{groupServices.map((service) => (
						<Grid item md={4} key={service.attributes.slug}>
							<ServiceCard service={service} showIndex={false} />
						</Grid>
					))}
				</Grid>
			</AllServicesContainer>
		),
	};

	return (
		<Box>
			<Grid container>
				<TabsNavigation item md={2}>
					<ul>
						{tabsMap.map((tab) => (
							<li
								key={tab.tabNum}
								className={tab.tabNum === activeTab ? "active" : undefined}
								style={{ cursor: "pointer" }}>
								<Link onClick={() => setActiveTab(tab.tabNum)}>
									{tab.title}
								</Link>
							</li>
						))}
					</ul>
				</TabsNavigation>
				<TabsContent item md={10}>
					<Box>
						<Breadcrumbs
							data={[
								{ name: "Các dịch vụ", link: "/dich-vu" },
								{ name: tabsMap[activeTab].title },
							]}
						/>
						{tabContentMap[activeTab]}
					</Box>
				</TabsContent>
			</Grid>
		</Box>
	);
};

export default DesktopView;
