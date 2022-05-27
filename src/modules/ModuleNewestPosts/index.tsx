import { useState, useEffect } from "react";
import { Posts } from "src/typings/posts.types";
import PostCard from "src/components/PostCard";
import { StyledBox, PostCardsContainer } from "./styles";
import { ModuleProps } from "./ModuleNewestPosts.types";
import { usePostQuery } from "src/hooks";
import { filterPostsData } from "src/utils";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
	moduleProps: ModuleProps;
	posts: Posts[];
}

const ModuleNewestPosts: React.FC<Props> = ({ moduleProps, posts }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const { query } = usePostQuery();
	const [newestPosts, setNewestPosts] = useState<Posts[] | null>(null);

	useEffect(() => {
		if (Boolean(posts) && !Boolean(query.length)) {
			setNewestPosts(!isMobile ? posts.slice(0, 6) : posts.slice(0, 2));
		}
		if (Boolean(posts) && Boolean(query.length)) {
			setNewestPosts(filterPostsData(query, posts));
		}
	}, [posts, query, isMobile]);

	return (
		<StyledBox
			sx={{
				marginBottom: Boolean(query.length)
					? { xs: "40px", md: "100px" }
					: undefined,
			}}>
			<Container>
				<Typography variant='h3'>
					{Boolean(query.length)
						? "Kết quả tìm kiếm"
						: moduleProps.heading.title}
				</Typography>
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
