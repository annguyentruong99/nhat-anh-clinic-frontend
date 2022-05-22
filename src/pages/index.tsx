import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { CoreApi } from "src/lib/core-api";
import { API_ENDPOINTS } from "src/lib/endpoints";

import ModuleHeroBanner from "src/modules/ModuleHeroBanner";
import ModuleServicesSlider from "src/modules/ModuleServicesSlider";
import ModuleDoctorsSlider from "src/modules/ModuleDoctorsSlider";
import ModuleWhyChooseUs from "src/modules/ModuleWhyChooseUs";
import ModuleAchievements from "src/modules/ModuleAchievements";
import ModuleBlogTabs from "src/modules/ModuleBlogTabs";

const modulesMap: { [module: string]: string } = {
	ModuleHeroBanner: "modules.hero-banner",
	ModuleServicesSlider: "modules.services-slider",
	ModuleDoctorsSlider: "modules.doctors-slider",
	ModuleWhyChooseUs: "modules.why-choose-us",
	ModuleAchievements: "modules.achievements",
	ModuleBlogTabs: "modules.blog-tabs",
};

const Home = ({
	pageData,
	services,
	doctors,
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { modules } = pageData;

	return (
		<div>
			<ModuleHeroBanner
				moduleProps={modules.find(
					(module) => module.__component === modulesMap[ModuleHeroBanner.name],
				)}
			/>
			<ModuleServicesSlider
				moduleProps={modules.find(
					(module) =>
						module.__component === modulesMap[ModuleServicesSlider.name],
				)}
				services={services?.data}
			/>
			<ModuleDoctorsSlider
				moduleProps={modules.find(
					(module) =>
						module.__component === modulesMap[ModuleDoctorsSlider.name],
				)}
				doctors={doctors?.data}
			/>
			<ModuleWhyChooseUs
				moduleProps={modules.find(
					(module) => module.__component === modulesMap[ModuleWhyChooseUs.name],
				)}
			/>
			<ModuleAchievements
				moduleProps={modules.find(
					(module) =>
						module.__component === modulesMap[ModuleAchievements.name],
				)}
			/>
			<ModuleBlogTabs
				moduleProps={modules.find(
					(module) => module.__component === modulesMap[ModuleBlogTabs.name],
				)}
				posts={posts?.data}
			/>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const Pages = new CoreApi(API_ENDPOINTS.pages);
	const Services = new CoreApi(API_ENDPOINTS.services);
	const Doctors = new CoreApi(API_ENDPOINTS.doctors);
	const Posts = new CoreApi(API_ENDPOINTS.posts);

	const { data: pageData } = await Pages.findAll();

	const { data: services } = await Services.findAll();

	const { data: doctors } = await Doctors.findAll();

	const { data: posts } = await Posts.findAll({
		sort: {
			field: "id:desc",
		},
		filters: undefined,
	});

	return {
		props: {
			pageData: pageData?.data[0]?.attributes,
			services,
			doctors,
			posts,
		},
		revalidate: 1800, // 30 mins
	};
};

export default Home;
