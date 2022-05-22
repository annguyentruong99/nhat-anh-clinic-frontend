import type {
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType,
} from "next";
import { initializeApollo } from "src/lib/apolloClient";
import { Posts } from "src/typings/posts.types";
import { PostsDocument } from "src/__generated__/types";
import { PostContentContainer, Title } from "./styles";

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
	const apolloClient = initializeApollo();
	const posts = await apolloClient
		.query({ query: PostsDocument })
		.then((res) => res.data.posts as Posts);

	if (!posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			post: posts.data.filter(
				(post) => post.attributes.slug === params.slug,
			)[0],
		},
		revalidate: 1800,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const apolloClient = initializeApollo();
	const posts = await apolloClient
		.query({ query: PostsDocument })
		.then((res) => res);

	const paths = (posts?.data?.posts as Posts).data.map((post) => ({
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
