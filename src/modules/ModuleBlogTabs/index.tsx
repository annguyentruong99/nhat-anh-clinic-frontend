import Link from "next/link";
import { useState } from "react";
import SectionHeading from "src/components/SectionHeading";
import { ModuleProps } from "./ModuleBlogTabs.types";
import { Posts } from "src/typings/posts.types";
import PostCard from "src/components/PostCard";
import AdBanner from "src/components/AdBanner";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TabPanel from "src/components/TabPanel";

const a11yProps = (index: number) => ({
	id: `tab-${index}`,
	"aria-controls": `tabpanel-${index}`,
});

interface Props {
	moduleProps: ModuleProps;
	posts: Posts;
}

const ModuleBlogTabs: React.FC<Props> = ({
	moduleProps: { blogTabsHeading, ads },
	posts: { data },
}) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ marginBottom: "100px" }}>
			<Container>
				<SectionHeading
					heading={blogTabsHeading}
					align={isDesktop ? "center" : "left"}
				/>
				<Box sx={{ marginTop: "40px" }}>
					<Grid
						container
						flexDirection='row'
						alignItems='center'
						justifyContent='space-between'>
						<Grid item xs={12} md={8}>
							<Tabs
								orientation='horizontal'
								value={value}
								onChange={handleChange}>
								<Tab label='Nổi bật' {...a11yProps(0)} disableRipple />
								<Tab label='Mới nhất' {...a11yProps(1)} disableRipple />
								<Tab label='Ưu đãi' {...a11yProps(2)} disableRipple />
							</Tabs>
						</Grid>
						<Grid
							item
							xs={0}
							md={4}
							sx={{ display: { xs: "none", md: "block" } }}>
							<Link href='/blog' passHref>
								<Typography
									color='error'
									variant='body1'
									sx={{ textAlign: "right", cursor: "pointer" }}>
									Xem tất cả
								</Typography>
							</Link>
						</Grid>
					</Grid>

					<TabPanel value={value} index={0}>
						<Grid container spacing={2}>
							{data
								.slice(0, 6)
								.sort(() => Math.random() - 0.5)
								.map((post) => (
									<Grid item xs={12} md={4} key={post.attributes.slug}>
										<Box sx={{ marginTop: "20px" }}>
											<PostCard post={post} />
										</Box>
									</Grid>
								))}
						</Grid>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Grid container spacing={2}>
							{data.slice(0, 6).map((post) => (
								<Grid item xs={12} md={4} key={post.attributes.slug}>
									<Box sx={{ marginTop: "20px" }}>
										<PostCard post={post} />
									</Box>
								</Grid>
							))}
						</Grid>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Grid container spacing={2} sx={{ marginTop: "24px" }}>
							{ads.map((ad, ind) => (
								<Grid item xs={12} key={ind}>
									<AdBanner cover={ad.cover} />
								</Grid>
							))}
						</Grid>
					</TabPanel>
				</Box>
			</Container>
		</Box>
	);
};

export default ModuleBlogTabs;
