import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { initializeApollo } from "src/lib/apolloClient";
import {
	HomePageDocument,
	ServicesDocument,
	DoctorsDocument,
} from "src/__generated__/types";

import ModuleHeroBanner from "src/modules/ModuleHeroBanner";
import ModuleServicesSlider from "src/modules/ModuleServicesSlider";
import ModuleDoctorsSlider from "src/modules/ModuleDoctorsSlider";
import ModuleWhyChooseUs from "src/modules/ModuleWhyChooseUs";
import ModuleAchievements from "src/modules/ModuleAchievements";

const modulesMap: { [module: string]: string } = {
	ModuleHeroBanner: "ComponentModulesHeroBanner",
	ModuleServicesSlider: "ComponentModulesServicesSlider",
	ModuleDoctorsSlider: "ComponentModulesDoctorsSlider",
	ModuleWhyChooseUs: "ComponentModulesWhyChooseUs",
	ModuleAchievements: "ComponentModulesAchievements",
};

const Home = ({
	pageData,
	services,
	doctors,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { modules } = pageData;

	return (
		<div>
			<ModuleHeroBanner
				moduleProps={
					modules.filter(
						(module) => module.__typename === modulesMap[ModuleHeroBanner.name],
					)[0]
				}
			/>
			<ModuleServicesSlider
				moduleProps={
					modules.filter(
						(module) =>
							module.__typename === modulesMap[ModuleServicesSlider.name],
					)[0]
				}
				services={services?.data?.services}
			/>
			<ModuleDoctorsSlider
				moduleProps={
					modules.filter(
						(module) =>
							module.__typename === modulesMap[ModuleDoctorsSlider.name],
					)[0]
				}
				doctors={doctors?.data?.doctors}
			/>
			<ModuleWhyChooseUs
				moduleProps={
					modules.filter(
						(module) =>
							module.__typename === modulesMap[ModuleWhyChooseUs.name],
					)[0]
				}
			/>
			<ModuleAchievements
				moduleProps={
					modules.filter(
						(module) =>
							module.__typename === modulesMap[ModuleAchievements.name],
					)[0]
				}
			/>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();
	const pageData = await apolloClient
		.query({ query: HomePageDocument })
		.then((res) => res);

	const services = await apolloClient
		.query({ query: ServicesDocument })
		.then((res) => res);

	const doctors = await apolloClient
		.query({ query: DoctorsDocument })
		.then((res) => res);

	return {
		props: {
			pageData: pageData?.data?.page?.data?.attributes,
			services,
			doctors,
		},
		revalidate: 1800, // 30 mins
	};
};

export default Home;
