import SectionHeading from "src/components/SectionHeading";
import { ModuleProps } from "./ModuleBlogTabs.types";
import { Posts } from "src/typings/posts.types";
import PostCard from "src/components/PostCard";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
	moduleProps: ModuleProps;
	posts: Posts;
}

const ModuleBlogTabs: React.FC<Props> = ({
	moduleProps: { blogTabsHeading },
	posts: { data },
}) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Box>
			<Container>
				<SectionHeading
					heading={blogTabsHeading}
					align={isDesktop ? "center" : "left"}
				/>
				<PostCard post={data[0]} />
			</Container>
		</Box>
	);
};

export default ModuleBlogTabs;
