import type {
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType,
} from "next";
import { Posts } from "src/typings/posts.types";
import { PostContentContainer, Title } from "./styles";
import { CoreApi } from "src/lib/core-api";
import { API_ENDPOINTS } from "src/lib/endpoints";

import ReactMarkdown from "react-markdown";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const BlogPost = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<PostContentContainer>
			<Box
				sx={{
					width: "100%",
					height: "400px",
					backgroundImage: `url(http://localhost:1337${post.attributes.cover.data.attributes.url})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "50% 50%",
				}}
			/>
			<Container>
				<Title variant='h1'>{post.attributes.title}</Title>
				<ReactMarkdown>{post.attributes.content}</ReactMarkdown>
			</Container>
		</PostContentContainer>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const Posts = new CoreApi(API_ENDPOINTS.posts);

	const { data: posts } = await Posts.findAll({
		sort: undefined,
		filters: {
			field: "slug",
			operator: "$eq",
			value: params?.slug as string,
		},
	});

	return {
		props: {
			post: posts?.data[0],
		},
		revalidate: 1800,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const Posts = new CoreApi(API_ENDPOINTS.posts);

	const { data: posts } = await Posts.findAll();

	const paths = (posts?.data as Posts[]).map((post) => ({
		params: {
			slug: post.attributes.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export default BlogPost;
