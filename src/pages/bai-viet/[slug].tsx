import { useRouter } from "next/router";
import type {
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType,
} from "next";
import { Posts } from "src/typings/posts.types";
import {
	StyledContainer,
	BreadcrumbsContainer,
	PostContentContainer,
	Title,
	PostSuggestionsContainer,
} from "src/styles/blog.styles";
import { CoreApi } from "src/lib/core-api";
import { API_ENDPOINTS } from "src/lib/endpoints";
import PostSuggestions from "src/components/PostSuggestions";
import Breadcrumbs from "src/components/Breadcrumbs";
import ArticleSeo from "src/components/Seo/ArticleSeo";

import ReactMarkdown from "react-markdown";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import Page from "src/components/Page";

const BlogPost = ({
	post,
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter();

	return (
		<Page
			title={`${post.attributes.title} | Phòng Khám Đa Khoa Nhật Anh`}
			description='Phòng Khám Đa Khoa Nhật Anh'
			router={router}>
			<ArticleSeo post={post} />
			<Box
				sx={{
					width: "100%",
					height: "400px",
					backgroundImage:
						process.env.NODE_ENV === "production"
							? `url(${post.attributes.cover.data.attributes.url})`
							: `url(http://localhost:1337${post.attributes.cover.data.attributes.url})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center center",
				}}
			/>
			<StyledContainer>
				<Container>
					<BreadcrumbsContainer>
						<Breadcrumbs
							data={[
								{
									name: "Bài viết",
									link: "/bai-viet",
								},
								{
									name: post.attributes.title,
									link: `/bai-viet/${post.attributes.slug}`,
								},
							]}
						/>
					</BreadcrumbsContainer>
					<Title variant='h1'>{post.attributes.title}</Title>
					<PostContentContainer>
						<ReactMarkdown>{post.attributes.content}</ReactMarkdown>
					</PostContentContainer>
					<PostSuggestionsContainer>
						<PostSuggestions currentPost={post} posts={posts} />
					</PostSuggestionsContainer>
				</Container>
			</StyledContainer>
		</Page>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const Posts = new CoreApi(API_ENDPOINTS.posts);

	const { data: posts } = await Posts.findAll();

	return {
		props: {
			post: posts?.data.filter(
				(post: Posts) => post.attributes.slug === params?.slug,
			)[0],
			posts: posts?.data,
		},
		revalidate: 60,
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
