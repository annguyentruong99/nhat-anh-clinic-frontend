import Link from "next/link";
import { useState, useEffect } from "react";
import { Cover } from "src/typings/common.types";
import {
	StyledCard,
	CardMediaContainer,
	StyledCardMedia,
	StyledCardContent,
	Title,
	PreviewContent,
	StyledCardActions,
} from "./styles";
import Button from "src/components/Button";

import ReactMarkdown from "react-markdown";

interface Props {
	post: {
		attributes: {
			title: string;
			slug: string;
			content: string;
			cover: Cover;
		};
	};
}

const PostCard: React.FC<Props> = ({
	post: {
		attributes: {
			title,
			content,
			slug,
			cover: {
				data: {
					attributes: { url },
				},
			},
		},
	},
}) => {
	const [previewPhrase, setPreviewPhrase] = useState("");

	const previewContent = content.split("\n");

	useEffect(() => {
		if (previewContent[0].includes("#")) {
			setPreviewPhrase(previewContent[1]);
		} else {
			setPreviewPhrase(previewContent[0]);
		}
	}, [previewContent]);

	return (
		<StyledCard>
			<CardMediaContainer>
				<Link href={`/blog/${slug}`} passHref>
					<StyledCardMedia
						component='img'
						height={200}
						image={`http://localhost:1337${url}`}
					/>
				</Link>
			</CardMediaContainer>
			<StyledCardContent>
				<Link href={`/blog/${slug}`} passHref>
					<Title variant='body1'>{title}</Title>
				</Link>
				<PreviewContent variant='body2'>{previewPhrase}</PreviewContent>
			</StyledCardContent>
			<StyledCardActions>
				<Button href={`/blog/${slug}`}>XEM CHI TIẾT</Button>
			</StyledCardActions>
		</StyledCard>
	);
};

export default PostCard;
