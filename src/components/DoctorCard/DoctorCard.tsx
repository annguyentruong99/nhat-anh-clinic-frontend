import { Cover } from "src/typings/common.types";
import {
	StyledCard,
	StyledCardContent,
	StyledCardActions,
	Role,
	Name,
	Description,
} from "./styles";
import Button from "src/components/Button";

import CardMedia from "@mui/material/CardMedia";

interface Props {
	doctor: {
		attributes: {
			role: string;
			title: string;
			name: string;
			slug: string;
			description: string;
			cover: Cover;
		};
	};
}

const DoctorCard: React.FC<Props> = ({
	doctor: {
		attributes: {
			role,
			title,
			name,
			slug,
			description,
			cover: {
				data: {
					attributes: { url },
				},
			},
		},
	},
}) => (
	<StyledCard>
		<CardMedia
			component='img'
			height='300'
			image={`http://localhost:1337${url}`}
			alt='Ảnh bác sĩ'
			sx={{
				objectFit: "contain",
				backgroundColor: (theme) => theme.palette.primary.light,
			}}
		/>
		<StyledCardContent>
			<Role variant='caption'>{role}</Role>
			<Name variant='h3'>{title + " " + name}</Name>
			<Description variant='caption'>{description}</Description>
		</StyledCardContent>
		{/* <StyledCardActions>
			<Button href={`/bac-si/${slug}`}>XEM CHI TIẾT</Button>
		</StyledCardActions> */}
	</StyledCard>
);

export default DoctorCard;
