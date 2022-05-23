import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { CoreApi } from "src/lib/core-api";
import { API_ENDPOINTS } from "src/lib/endpoints";
import { getModulesMap } from "src/utils";

const Home = ({
	pageData,
	services,
	doctors,
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { modules } = pageData;

	const modulesMap = getModulesMap(modules, services, posts, doctors);

	if (!modules) return null;

	return modules.map((module, ind) => {
		if (!module?.__component) return null;
		const Module = modulesMap[module.__component].component;
		if (!Module) {
			console.error(`Unexpected Module ${module.__component}`);
			return null;
		}
		return <Module key={ind} {...modulesMap[module.__component].props} />;
	});
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
			pageData: pageData.data[0].attributes,
			services: services.data,
			doctors: doctors.data,
			posts: posts.data,
		},
		revalidate: 1800, // 30 mins
	};
};

export default Home;
