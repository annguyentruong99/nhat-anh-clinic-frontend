import { Cover } from "src/typings/common.types";
import { Services } from "src/typings/services.types";

export type ModuleStyles = "style-a" | "style-b" | "style-c" | "style-e";

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
	highlights?: {
		id: number;
		text: string;
	}[];
};
