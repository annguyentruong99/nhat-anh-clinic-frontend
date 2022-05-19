import Typography from "@mui/material/Typography";

import { StyledBox, Subtitle } from "./styles";
import { Headings } from "src/typings/common.types";

interface Props {
	heading: Headings;
	titleColor?: string;
	align?: "left" | "center" | "right";
}

const SectionHeading: React.FC<Props> = ({
	heading: { title, subtitle = undefined },
	titleColor = "primary.darker",
	align = "left",
}) => (
	<StyledBox
		sx={{
			alignItems:
				align === "left"
					? "flex-start"
					: align === "center"
					? "center"
					: "flex-end",
		}}>
		<Typography
			variant='h1'
			sx={{
				color: titleColor,
				textAlign: align === "center" ? "center" : undefined,
			}}>
			{title}
		</Typography>
		{Boolean(subtitle) && <Subtitle variant='body2'>{subtitle}</Subtitle>}
	</StyledBox>
);

export default SectionHeading;
