import { useState, useEffect } from "react";
import { Posts } from "src/typings/posts.types";
import PostCard from "src/components/PostCard";
import { StyledBox, PostCardsContainer } from "./styles";
import { ModuleProps } from "./ModuleNewestPosts.types";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

interface Props {
	moduleProps: ModuleProps;
	posts: Posts[];
}

const ModuleNewestPosts: React.FC<Props> = ({ moduleProps, posts }) => {
	const [newestPosts, setNewestPosts] = useState<Posts[] | null>(null);

	useEffect(() => {
		if (Boolean(posts)) {
			setNewestPosts(posts.slice(0, 6));
		}
	}, [posts]);

	return (
		<StyledBox>
			<Container>
				<Typography variant='h3'>{moduleProps.heading.title}</Typography>
				<PostCardsContainer container spacing={3}>
					{newestPosts?.map((post) => (
						<Grid item xs={12} md={4} key={post.attributes.slug}>
							<PostCard post={post} />
						</Grid>
					))}
				</PostCardsContainer>
			</Container>
		</StyledBox>
	);
};

export default ModuleNewestPosts;
