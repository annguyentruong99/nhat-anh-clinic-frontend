import Image from "next/image";
import { IconTextContainer, Title1, StyledBox } from "./styles";
import { ModuleProps } from "./ModuleAchievements.types";
import IconText from "src/components/IconText";

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
		<Container>
			<Grid container>
				<Grid
					item
					xs={12}
					md={12}
					lg={6}
					sx={{
						padding: "107px 0 67px 0",
						backgroundImage:
							"url(http://localhost:1337/uploads/abstract_2_0921b86601.png)",
						backgroundSize: "209px 209px",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "right bottom",
					}}>
					<Title1 variant='h1'>{title1 + " " + title2}</Title1>
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
	);
};

export default ModuleAchievements;
