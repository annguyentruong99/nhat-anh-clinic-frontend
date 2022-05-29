import Head from "next/head";

interface Props {
	links: {
		title: string;
		href: string;
	}[];
}

const NavigationSeo = ({ links }: Props) => {
	let data: Record<string, any> = links.map((link) => ({
		"@context": "https://schema.org",
		"@type": "SiteNavigationElement",
		name: link.title,
		url: link.href,
	}));

	return (
		<Head>
			<script type='application/ld+json'>{JSON.stringify(data)}</script>
		</Head>
	);
};

export default NavigationSeo;
