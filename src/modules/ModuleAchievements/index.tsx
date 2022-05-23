import Image from "next/image";
import { IconTextContainer, TitleContainer, Title1, Title2 } from "./styles";
import { ModuleProps } from "./ModuleAchievements.types";
import IconText from "src/components/IconText";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

interface Props {
	moduleProps: ModuleProps;
}

const ModuleAchievements: React.FC<Props> = ({
	moduleProps: {
		title: { title1, title2 },
		achievements,
		cover: {
			data: {
				attributes: { url },
			},
		},
	},
}) => {
	return (
		<Box sx={{ backgroundColor: (theme) => theme.palette.primary.light }}>
			<Container
				sx={{
					backgroundImage: {
						xs: "url(http://localhost:1337/uploads/abstract_2_0921b86601.png)",
						lg: "none",
						xl: "none",
					},
					backgroundRepeat: "no-repeat",
					backgroundPosition: "bottom right",
					backgroundSize: "104px 104px",
				}}>
				<Grid container>
					<Grid
						item
						xs={12}
						md={12}
						lg={6}
						sx={{
							padding: "107px 0 67px 0",
							backgroundImage: {
								lg: "url(http://localhost:1337/uploads/abstract_2_0921b86601.png)",
							},
							backgroundSize: "209px 209px",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "bottom right",
						}}>
						<TitleContainer>
							<Title1 variant='h1'>{title1 + " "}</Title1>
							<Title2 variant='h1'>{title2}</Title2>
						</TitleContainer>
						<IconTextContainer container>
							{achievements.map((achievement, ind) => (
								<Grid item xs={6} md={3} key={ind}>
									<IconText
										icon={achievement.icon}
										title={achievement.title}
										description={achievement.description}
									/>
								</Grid>
							))}
						</IconTextContainer>
					</Grid>
					<Grid
						item
						xs={0}
						md={0}
						lg={6}
						sx={{
							backgroundImage: `url(http://localhost:1337${url})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}></Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ModuleAchievements;
