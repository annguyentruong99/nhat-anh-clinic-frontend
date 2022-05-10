import Typography from "@mui/material/Typography";

import { StyledBox, Subtitle } from "./styles";
import { Headings } from "src/typings/common.types";

interface Props {
	heading: Headings;
	titleColor?: string;
}

const SectionHeading: React.FC<Props> = ({
	heading: { title, subtitle = undefined },
	titleColor = "primary.darker",
}) => (
	<StyledBox>
		<Typography variant='h1' sx={{ color: titleColor }}>
			{title}
		</Typography>
		{Boolean(subtitle) && <Subtitle variant='body2'>{subtitle}</Subtitle>}
	</StyledBox>
);

export default SectionHeading;
