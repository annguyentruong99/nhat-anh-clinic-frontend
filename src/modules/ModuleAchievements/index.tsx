import { IconTextContainer, TitleContainer } from "./styles";
import { ModuleProps } from "./ModuleAchievements.types";
import IconText from "src/components/IconText";
import Title from "src/components/Title";
import ImageLeft from "src/components/ImageLeft";

import Grid from "@mui/material/Grid";

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
		<ImageLeft imageUrl={url}>
			<TitleContainer>
				<Title title1={title1} title2={title2} variant='h1' />
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
		</ImageLeft>
	);
};

export default ModuleAchievements;
