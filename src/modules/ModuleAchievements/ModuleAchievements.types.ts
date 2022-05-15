import { Cover } from "src/typings/common.types";

export interface ModuleProps {
	title: {
		title1: string;
		title2: string;
	};
	achievements: {
		icon: Cover;
		title: string;
		description: string;
	}[];
	cover: Cover;
}
