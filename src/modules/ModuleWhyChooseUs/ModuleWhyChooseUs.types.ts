import { Cover, Headings } from "src/typings/common.types";

export type ModuleProps = {
	heading: Headings;
	backgroundImage: Cover;
	imageText: {
		cover: Cover;
		title: string;
		description: string;
	}[];
};
