import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Posts } from "src/typings/posts.types";
import PostCard from "src/components/PostCard";
import { StyledBox, PostCardsContainer } from "./styles";
import { ModuleProps } from "./ModuleNewestPosts.types";
import { usePostQuery } from "src/hooks";
import { filterPostsData } from "src/utils";

import Box from "@mui/material/Box";
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
	const router = useRouter();
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
			document.getElementById("posts-container")?.scrollIntoView();
		}
		if (router.query.viewAll === "bai-viet-moi") {
			setNewestPosts(posts);
			document.getElementById("posts-container")?.scrollIntoView();
		}
	}, [posts, query, isMobile, router.query.viewAll]);

	return (
		<StyledBox
			id='posts-container'
			sx={{
				padding:
					Boolean(query.length) || router.query.viewAll === "bai-viet-moi"
						? { xs: "40px 0", md: "100px 0" }
						: undefined,
				display:
					router.query.viewAll === "bai-viet-noi-bat" ? "none" : undefined,
			}}>
			<Container>
				<Grid container>
					<Grid item xs={6} md={12}>
						<Typography variant='h3'>
							{Boolean(query.length)
								? "Kết quả tìm kiếm"
								: moduleProps.heading.title}
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}
						sx={{
							display: {
								xs:
									router.query.viewAll === "bai-viet-moi" ? "none" : undefined,
								md: "none",
							},
						}}>
						<Link
							href={{
								pathname: router.pathname,
								query: { ...router.query, viewAll: "bai-viet-moi" },
							}}
							passHref
							shallow
							replace>
							<Typography
								color='error'
								variant='body1'
								sx={{ textAlign: "right", cursor: "pointer" }}>
								Xem tất cả
							</Typography>
						</Link>
					</Grid>
				</Grid>
				{Boolean(newestPosts?.length) ? (
					<PostCardsContainer container spacing={3}>
						{newestPosts?.map((post) => (
							<Grid item xs={12} md={4} key={post.attributes.slug}>
								<PostCard post={post} />
							</Grid>
						))}
					</PostCardsContainer>
				) : (
					<Box
						sx={{
							height: "200px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Typography variant='body2'>
							Xin lỗi! Chúng tôi không tìm được bài viết nào!
						</Typography>
					</Box>
				)}
			</Container>
		</StyledBox>
	);
};

export default ModuleNewestPosts;
