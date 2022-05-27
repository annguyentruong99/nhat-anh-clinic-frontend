import { Cover } from "src/typings/common.types";

export type ModuleStyles = "style-a" | "style-b" | "style-c";

export type ModuleProps = {
	subtitle?: string;
	title: {
		title1: string;
		title2: string;
	};
	cover: Cover;
	description?: string;
	style: ModuleStyles;
	cta?: {
		content: string;
		link: string;
	};
};
