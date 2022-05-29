import Head from "next/head";

const LocalBusinessSeo = () => {
	const data: Record<string, any> = {
		"@context": "https://schema.org",
		"@type": "MedicalClinic",
		name: "Phòng Khám Đa Khoa Nhật Anh",
		image: "",
		"@id": "",
		url: process.env.NEXT_PUBLIC_BASE_URL,
		telephone: "0902328105",
		address: {
			"@type": "PostalAddress",
			streetAddress: "20 Ngô Quyền, Phường 6, Quận 5",
			addressLocality: "Thành Phố Hồ Chí Minh",
			postalCode: "100000",
			addressCountry: "VN",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 10.7512853,
			longitude: 106.6649573,
		},
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				opens: "07:30",
				closes: "20:00",
			},
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Saturday",
				opens: "07:30",
				closes: "17:00",
			},
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Sunday",
				opens: "07:30",
				closes: "12:00",
			},
		],
	};

	return (
		<Head>
			<script type='application/ld+json'>{JSON.stringify(data)}</script>
		</Head>
	);
};

export default LocalBusinessSeo;
