import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { initializeApollo } from "src/lib/apolloClient";
import { HomePageDocument, ServicesDocument } from "src/__generated__/types";

import ModuleHeroBanner from "src/modules/ModuleHeroBanner";
import ModuleServicesSlider from "src/modules/ModuleServicesSlider";

const modulesMap: { [module: string]: string } = {
	ModuleHeroBanner: "ComponentModulesHeroBanner",
	ModuleServicesSlider: "ComponentModulesServicesSlider",
};

const Home = ({
	pageData,
	services,
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
				services={services}
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

	return {
		props: {
			pageData: pageData?.data?.page?.data?.attributes,
			services: services?.data?.services,
		},
	};
};

export default Home;
