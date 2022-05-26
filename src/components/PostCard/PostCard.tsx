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
	ctaContent?: string;
	alwayShowCta?: boolean;
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
	ctaContent = "XEM CHI TIẾT",
	alwayShowCta = false,
}) => {
	const [previewPhrase, setPreviewPhrase] = useState("");

	const previewContent = content.split("\n");

	useEffect(() => {
		previewContent.every((phrase) => {
			if (!phrase.includes("#")) {
				setPreviewPhrase(phrase.replaceAll("*", ""));
				return false;
			}
		});
	}, [previewContent]);

	return (
		<StyledCard>
			<CardMediaContainer>
				<Link href={`/bai-viet/${slug}`} passHref>
					<StyledCardMedia
						component='img'
						height={200}
						image={
							process.env.NODE_ENV === "production"
								? url
								: `http://localhost:1337${url}`
						}
					/>
				</Link>
			</CardMediaContainer>
			<StyledCardContent>
				<Link href={`/bai-viet/${slug}`} passHref>
					<Title variant='body1'>{title}</Title>
				</Link>
				<PreviewContent variant='body2'>{previewPhrase}</PreviewContent>
			</StyledCardContent>
			<StyledCardActions
				sx={{ display: { md: alwayShowCta ? "block" : "none" } }}>
				<Button href={`/bai-viet/${slug}`}>{ctaContent}</Button>
			</StyledCardActions>
		</StyledCard>
	);
};

export default PostCard;
