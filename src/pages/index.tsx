import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { CoreApi } from "src/lib/core-api";
import { API_ENDPOINTS } from "src/lib/endpoints";
import { getModulesMap } from "src/utils";
import ModulePage from "src/modules/index";
import Page from "src/components/Page";
import { useRouter } from "next/router";

const Home = ({
	pageData,
	services,
	doctors,
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter();
	const { modules, seo } = pageData;

	const modulesMap = getModulesMap(modules, services, posts, doctors);

	return (
		<Page title={seo.seoTitle} description={seo.seoDesc} router={router}>
			<ModulePage modulesData={modules} modulesMapData={modulesMap} />
		</Page>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const Pages = new CoreApi(API_ENDPOINTS.pages);
	const Services = new CoreApi(API_ENDPOINTS.services);
	const Doctors = new CoreApi(API_ENDPOINTS.doctors);
	const Posts = new CoreApi(API_ENDPOINTS.posts);

	const { data: pageData } = await Pages.findOne(1);

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
			pageData: pageData.data.attributes,
			services: services.data,
			doctors: doctors.data,
			posts: posts.data,
		},
		revalidate: 60,
	};
};

export default Home;
