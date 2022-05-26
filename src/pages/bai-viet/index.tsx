import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Page from "src/components/Page";
import { CoreApi } from "src/lib/core-api";
import { API_ENDPOINTS } from "src/lib/endpoints";
import ModulePage from "src/modules";
import ModulePostHighlights from "src/modules/ModulePostHighlights";
import { getModulesMap } from "src/utils";

const Blog = ({
	pageData,
	posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const router = useRouter();
	const { seo, modules } = pageData;

	const modulesMap = getModulesMap(modules, undefined, posts, undefined);

	return (
		<Page title={seo.seoTitle} description={seo.seoDesc} router={router}>
			<ModulePage modulesData={modules} modulesMapData={modulesMap} />
		</Page>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const Posts = new CoreApi(API_ENDPOINTS.posts);
	const Pages = new CoreApi(API_ENDPOINTS.pages);

	const { data: pageData } = await Pages.findAll();

	const { data: posts } = await Posts.findAll({
		sort: {
			field: "id:desc",
		},
		filters: undefined,
	});

	return {
		props: {
			pageData: pageData.data[1].attributes,
			posts: posts.data,
		},
	};
};

export default Blog;
