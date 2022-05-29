import Head from "next/head";

const CorporationSeo = () => {
	const data: Record<string, any> = {
		"@context": "https://schema.org",
		"@type": "Corporation",
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
		name: "Phòng Khám Đa Khoa Nhật Anh",
		alternateName: "Phòng Khám Nhật Anh",
		logo: "https://nhatanh.clinic/assets/logo.jpg",
	};

	return (
		<Head>
			<script type='application/ld+json'>{JSON.stringify(data)}</script>
		</Head>
	);
};

export default CorporationSeo;
