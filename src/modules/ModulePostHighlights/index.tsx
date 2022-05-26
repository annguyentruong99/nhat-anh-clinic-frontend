import { useState, useEffect } from "react";
import { Posts } from "src/typings/posts.types";
import PostCard from "src/components/PostCard";
import { StyledBox, PostCardsContainer } from "./styles";
import { ModuleProps } from "./ModulePostHighlights.types";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

interface Props {
	moduleProps: ModuleProps;
	posts: Posts[];
}

const ModulePostHighlights: React.FC<Props> = ({ moduleProps, posts }) => {
	const [postHighlights, setPostHighlights] = useState<Posts[] | null>(null);

	useEffect(() => {
		setPostHighlights(
			posts.filter(
				(post) => post.attributes.tags?.toLowerCase() === "sản phụ khoa",
			),
		);
	}, [posts]);

	return (
		<StyledBox>
			<Container>
				<Typography variant='h3'>{moduleProps.heading.title}</Typography>
				<PostCardsContainer container spacing={3}>
					{postHighlights?.slice(0, 2).map((post) => (
						<Grid item xs={12} md={6} key={post.attributes.slug}>
							<PostCard post={post} alwayShowCta ctaContent='ĐỌC THÊM' />
						</Grid>
					))}
					{postHighlights?.slice(2, 5).map((post) => (
						<Grid item xs={12} md={4} key={post.attributes.slug}>
							<PostCard post={post} />
						</Grid>
					))}
				</PostCardsContainer>
			</Container>
		</StyledBox>
	);
};

export default ModulePostHighlights;
