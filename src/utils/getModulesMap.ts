import React from "react";
import ModuleAchievements from "src/modules/ModuleAchievements";
import ModuleAds from "src/modules/ModuleAds";
import ModuleBlogTabs from "src/modules/ModuleBlogTabs";
import ModuleDoctorsSlider from "src/modules/ModuleDoctorsSlider";
import ModuleHeroBanner from "src/modules/ModuleHeroBanner";
import ModuleNewestPosts from "src/modules/ModuleNewestPosts";
import ModulePostHighlights from "src/modules/ModulePostHighlights";
import ModuleServicesList from "src/modules/ModuleServicesList";
import ModuleServicesSlider from "src/modules/ModuleServicesSlider";
import ModuleWhyChooseUs from "src/modules/ModuleWhyChooseUs";
import { Doctors } from "src/typings/doctors.types";
import { Posts } from "src/typings/posts.types";
import { Services } from "src/typings/services.types";

export type ModulesMap = {
	[component: string]: {
		component: any;
		props: {
			moduleProps: React.Component;
			services?: Services[];
			doctors?: Doctors[];
			posts?: Posts[];
			highlights?: {
				id: number;
				text: string;
			}[];
		};
	};
};

export const getModulesMap = (
	modules: any,
	services?: Services[],
	posts?: Posts[],
	doctors?: Doctors[],
	serviceHighlights?: {
		id: number;
		text: string;
	}[],
): ModulesMap => ({
	"modules.hero-banner": {
		component: ModuleHeroBanner,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.hero-banner",
			),
			highlights: Boolean(serviceHighlights?.length)
				? serviceHighlights
				: undefined,
		},
	},
	"modules.services-slider": {
		component: ModuleServicesSlider,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.services-slider",
			),
			services: services,
		},
	},
	"modules.doctors-slider": {
		component: ModuleDoctorsSlider,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.doctors-slider",
			),
			doctors: doctors,
		},
	},
	"modules.why-choose-us": {
		component: ModuleWhyChooseUs,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.why-choose-us",
			),
		},
	},
	"modules.achievements": {
		component: ModuleAchievements,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.achievements",
			),
		},
	},
	"modules.blog-tabs": {
		component: ModuleBlogTabs,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.blog-tabs",
			),
			posts: posts,
		},
	},
	"modules.post-highlights": {
		component: ModulePostHighlights,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.post-highlights",
			),
			posts: posts,
		},
	},
	"modules.newest-posts": {
		component: ModuleNewestPosts,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.newest-posts",
			),
			posts: posts,
		},
	},
	"modules.ads": {
		component: ModuleAds,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.ads",
			),
		},
	},
	"modules.services-list": {
		component: ModuleServicesList,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.services-list",
			),
			services: services,
		},
	},
});
