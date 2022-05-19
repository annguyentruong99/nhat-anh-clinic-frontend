import { Cover } from "./common.types";

export interface Posts {
	data: {
		attributes: {
			title: string;
			slug: string;
			content: string;
			cover: Cover;
		};
	}[];
}
