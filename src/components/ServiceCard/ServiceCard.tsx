import ListItemText from "@mui/material/ListItemText";
import CardMedia from "@mui/material/CardMedia";

import {
	StyledCard,
	StyledCardContent,
	StyledCardActions,
	ServiceName,
	Index,
} from "./styles";
import ServiceHighlights from "../ServiceHighlights";

import { convertSingleToDoubleDigit } from "src/utils";

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
				id: number;
				text: string;
			}[];
		};
	};
	index?: number;
	showIndex?: boolean;
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
	showIndex = true,
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
			{index && showIndex ? (
				<Index variant='h1'>{convertSingleToDoubleDigit(index)}</Index>
			) : null}
			<ServiceName variant='h3'>{name}</ServiceName>
			<ServiceHighlights highlights={highlights} />
		</StyledCardContent>
		<StyledCardActions>
			<Button href={`/dich-vu/${slug}`}>XEM CHI TIẾT</Button>
		</StyledCardActions>
	</StyledCard>
);

export default ServiceCard;
