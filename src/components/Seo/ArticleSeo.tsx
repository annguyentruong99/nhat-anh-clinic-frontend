import Head from "next/head";
import { Posts } from "src/typings/posts.types";

interface Props {
	post: Posts;
}

const ArticleSeo = ({ post }: Props) => {
	let data: Record<string, any> = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `https://${process.env.NEXT_PUBLIC_BASE_URL}/bai-viet/${post.attributes.slug}`,
		},
		headline: post.attributes.title,
		image: [post.attributes.cover.data.attributes.url],
		datePublished: post.attributes.publishedAt!,
		dateModified: post.attributes.updatedAt!,
		author: {
			"@type": "Organization",
			name: "Phòng Khám Đa Khoa Nhật Anh",
		},
		publisher: {
			"@type": "Organization",
			name: "Phòng Khám Đa Khoa Nhật Anh",
			logo: {
				"@type": "ImageObject",
				url: "https://nhatanh.clinic/assets/logo.jpg",
			},
		},
	};

	return (
		<Head>
			<script type='application/ld+json'>{JSON.stringify(data)}</script>
		</Head>
	);
};

export default ArticleSeo;
