import {
	StyledList,
	StyledListItem,
	StyledListItemIcon,
	Highlight,
} from "./styles";

import ListItemText from "@mui/material/ListItemText";
import Checkbox from "src/components/icons/Checkbox";

interface Props {
	highlights: {
		id: number;
		text: string;
	}[];
}

const ServiceHighlights: React.FC<Props> = ({ highlights }) => (
	<>
		<StyledList alignItems='flex-start' justifyContent='space-evenly'>
			{highlights.map(({ text }, ind) => (
				<StyledListItem key={ind}>
					<StyledListItemIcon>
						<Checkbox />
					</StyledListItemIcon>
					<ListItemText disableTypography>
						<Highlight variant='body2'>{text}</Highlight>
					</ListItemText>
				</StyledListItem>
			))}
		</StyledList>
	</>
);

export default ServiceHighlights;
