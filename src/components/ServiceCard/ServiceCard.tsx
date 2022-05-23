import ListItemText from "@mui/material/ListItemText";
import CardMedia from "@mui/material/CardMedia";

import {
	StyledCard,
	StyledCardContent,
	StyledCardActions,
	ServiceName,
	Index,
	Highlight,
	StyledList,
	StyledListItem,
	StyledListItemIcon,
} from "./styles";

import { convertSingleToDoubleDigit } from "src/utils";

import Checkbox from "src/components/icons/Checkbox";
import Button from "src/components/Button";

interface Props {
	service: {
		attributes: {
			name: string;
			slug: string;
			cover: {
				data: {
					attributes: {
						url: string;
					};
				};
			};
			highlights: {
				text: string;
			}[];
		};
	};
	index?: number;
}

const ServiceCard: React.FC<Props> = ({
	service: {
		attributes: {
			name,
			slug,
			highlights,
			cover: {
				data: {
					attributes: { url },
				},
			},
		},
	},
	index,
}) => (
	<StyledCard>
		<CardMedia
			component='img'
			height='200'
			image={
				process.env.NODE_ENV === "production"
					? url
					: `http://localhost:1337${url}`
			}
			alt='Ảnh Dịch Vụ'
		/>
		<StyledCardContent>
			{index && <Index variant='h1'>{convertSingleToDoubleDigit(index)}</Index>}
			<ServiceName variant='h3'>{name}</ServiceName>
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
		</StyledCardContent>
		<StyledCardActions>
			<Button href={`/dich-vu/${slug}`}>XEM CHI TIẾT</Button>
		</StyledCardActions>
	</StyledCard>
);

export default ServiceCard;
