import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Posts } from "src/typings/posts.types";
import PostCard from "src/components/PostCard";
import { StyledBox, PostCardsContainer } from "./styles";
import { ModuleProps } from "./ModulePostHighlights.types";
import { usePostQuery } from "src/hooks";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
	moduleProps: ModuleProps;
	posts: Posts[];
}

const ModulePostHighlights: React.FC<Props> = ({
	moduleProps: { heading },
	posts,
}) => {
	const router = useRouter();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const { query } = usePostQuery();
	const [postHighlights, setPostHighlights] = useState<Posts[] | null>(null);

	useEffect(() => {
		if (Boolean(posts)) {
			setPostHighlights(
				posts.filter(
					(post) => post.attributes.tags?.toLowerCase() === "sản phụ khoa",
				),
			);
		}
		if (router.query.viewAll === "post-highlights") {
			document.getElementById("post-highlights")?.scrollIntoView();
		}
	}, [posts, router.query.viewAll]);

	return (
		<StyledBox
			id='post-highlights'
			sx={{
				display:
					Boolean(query.length) || router.query.viewAll === "bai-viet-moi"
						? "none"
						: undefined,
				padding: "40px 0",
			}}>
			<Container>
				<Grid container>
					<Grid item xs={6} md={12}>
						<Typography variant='h3'>{heading.title}</Typography>
					</Grid>
					<Grid
						item
						xs={6}
						sx={{
							display: {
								xs:
									router.query.viewAll === "bai-viet-noi-bat"
										? "none"
										: undefined,
								md: "none",
							},
						}}>
						<Link
							href={{
								pathname: router.pathname,
								query: { ...router.query, viewAll: "bai-viet-noi-bat" },
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
				<PostCardsContainer container spacing={3}>
					{router.query.viewAll === "bai-viet-noi-bat"
						? postHighlights?.map((post) => (
								<Grid item xs={12} md={6} key={post.attributes.slug}>
									<PostCard
										post={post}
										alwayShowCta={!isMobile}
										ctaContent={!isMobile ? "ĐỌC THÊM" : undefined}
									/>
								</Grid>
						  ))
						: postHighlights?.slice(0, 2).map((post) => (
								<Grid item xs={12} md={6} key={post.attributes.slug}>
									<PostCard
										post={post}
										alwayShowCta={!isMobile}
										ctaContent={!isMobile ? "ĐỌC THÊM" : undefined}
									/>
								</Grid>
						  ))}
					{!isMobile &&
						postHighlights?.slice(2, 5).map((post) => (
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
