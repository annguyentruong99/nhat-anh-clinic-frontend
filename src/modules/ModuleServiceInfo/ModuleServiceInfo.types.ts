import { Cover } from "src/typings/common.types";

export interface ModuleProps {
	title: {
		title1: string;
		title2: string;
	};
	description: string;
	cta: {
		content: string;
		link: string;
	};
	cover: Cover;
}
