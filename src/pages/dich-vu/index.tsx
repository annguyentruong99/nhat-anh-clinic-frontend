import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { CoreApi } from "src/lib/core-api";
import { API_ENDPOINTS } from "src/lib/endpoints";
import Page from "src/components/Page";
import ModulePage from "src/modules";
import { getModulesMap } from "src/utils";

const Services = ({
	pageData,
	services,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter();
	const { modules, seo } = pageData;

	const modulesMap = getModulesMap(modules, services, undefined, undefined);

	return (
		<Page title={seo.seoTitle} description={seo.seoDesc} router={router}>
			<ModulePage modulesData={modules} modulesMapData={modulesMap} />
		</Page>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const Pages = new CoreApi(API_ENDPOINTS.pages);
	const Services = new CoreApi(API_ENDPOINTS.services);

	const { data: pageData } = await Pages.findOne(3);

	const { data: services } = await Services.findAll();

	return {
		props: {
			pageData: pageData.data.attributes,
			services: services.data,
		},
		revalidate: 60,
	};
};

export default Services;
