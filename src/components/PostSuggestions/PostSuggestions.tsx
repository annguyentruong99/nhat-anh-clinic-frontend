import { useEffect, useState } from "react";
import { Posts } from "src/typings/posts.types";
import PostCard from "src/components/PostCard";
import { Heading, PostCardsContainer } from "./styles";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface Props {
	currentPost: Posts;
	posts: Posts[];
}

const PostSuggestions: React.FC<Props> = ({ currentPost, posts }) => {
	const [suggestedPosts, setSuggestedPosts] = useState<Posts[] | null>(null);

	useEffect(() => {
		if (!Boolean(currentPost.attributes.tags)) {
			setSuggestedPosts(posts.slice(0, 2));
		} else {
			setSuggestedPosts(
				posts
					.filter(
						(post) =>
							post.attributes.tags === currentPost.attributes.tags &&
							post.attributes.slug !== currentPost.attributes.slug,
					)
					.slice(0, 2),
			);
		}
	}, [currentPost.attributes.tags, currentPost.attributes.slug, posts]);

	return (
		<Box>
			<Heading variant='h3'>Có thể bạn quan tâm</Heading>
			{Boolean(suggestedPosts) && (
				<PostCardsContainer container spacing={3}>
					{suggestedPosts?.map((post) => (
						<Grid item xs={12} md={6} key={post.attributes.slug}>
							<PostCard post={post} />
						</Grid>
					))}
				</PostCardsContainer>
			)}
		</Box>
	);
};

export default PostSuggestions;
