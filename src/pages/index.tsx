import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { initializeApollo } from "src/lib/apolloClient";
import { HomePageDocument } from "src/__generated__/types";

import ModuleHeroBanner from "src/modules/ModuleHeroBanner";
import Banner from "public/assets/Banner.png";

const modulesMap: { [module: string]: string } = {
	ModuleHeroBanner: "ComponentModulesHeroBanner",
};

const Home = ({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const apolloClient = initializeApollo();
	const pageData = await apolloClient
		.query({ query: HomePageDocument })
		.then((res) => res);

	return {
		props: {
			pageData: pageData?.data?.page?.data?.attributes,
		},
	};
};

export default Home;
