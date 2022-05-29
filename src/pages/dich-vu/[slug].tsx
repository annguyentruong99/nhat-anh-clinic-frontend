import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import Page from "src/components/Page";
import { CoreApi } from "src/lib/core-api";
import { API_ENDPOINTS } from "src/lib/endpoints";
import { Services } from "src/typings/services.types";
import ModulePage from "src/modules";
import { getModulesMap } from "src/utils";

const Service = ({
	service,
	services,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { modules, doctorsInService, highlights } = service;
	const router = useRouter();

	const modulesMap = getModulesMap(
		modules,
		services,
		undefined,
		doctorsInService?.data,
		highlights,
	);

	return (
		<Page
			title={`${service.name} | Phòng Khám Đa Khoa Nhật Anh`}
			description='Phòng Khám Đa Khoa Nhật Anh'
			router={router}>
			<ModulePage modulesData={modules} modulesMapData={modulesMap} />
		</Page>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const Services = new CoreApi(API_ENDPOINTS.services);

	const { data: services } = await Services.findAll();

	return {
		props: {
			service: services?.data.filter(
				(service: Services) => service.attributes.slug === params?.slug,
			)[0].attributes,
			services: services?.data,
		},
		revalidate: 1800,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const Services = new CoreApi(API_ENDPOINTS.services);

	const { data: services } = await Services.findAll();

	const paths = (services?.data as Services[]).map((service) => ({
		params: {
			slug: service.attributes.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export default Service;
