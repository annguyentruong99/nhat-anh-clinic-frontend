import React from "react";
import ModuleAchievements from "src/modules/ModuleAchievements";
import ModuleAds from "src/modules/ModuleAds";
import ModuleBlogTabs from "src/modules/ModuleBlogTabs";
import ModuleDoctorsSlider from "src/modules/ModuleDoctorsSlider";
import ModuleHeroBanner from "src/modules/ModuleHeroBanner";
import ModuleNewestPosts from "src/modules/ModuleNewestPosts";
import ModulePostHighlights from "src/modules/ModulePostHighlights";
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
		};
	};
};

export const getModulesMap = (
	modules: any,
	services?: Services[],
	posts?: Posts[],
	doctors?: Doctors[],
): ModulesMap => ({
	"modules.hero-banner": {
		component: ModuleHeroBanner,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.hero-banner",
			),
		},
	},
	"modules.services-slider": {
		component: ModuleServicesSlider,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.services-slider",
			),
			services: Boolean(services) ? services : undefined,
		},
	},
	"modules.doctors-slider": {
		component: ModuleDoctorsSlider,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.doctors-slider",
			),
			doctors: Boolean(doctors) ? doctors : undefined,
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
			posts: Boolean(posts) ? posts : undefined,
		},
	},
	"modules.post-highlights": {
		component: ModulePostHighlights,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.post-highlights",
			),
			posts: Boolean(posts) ? posts : undefined,
		},
	},
	"modules.newest-posts": {
		component: ModuleNewestPosts,
		props: {
			moduleProps: modules.find(
				(module: any) => module.__component === "modules.newest-posts",
			),
			posts: Boolean(posts) ? posts : undefined,
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
});
