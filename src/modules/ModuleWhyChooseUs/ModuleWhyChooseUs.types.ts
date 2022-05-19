import { Cover, Headings } from "src/typings/common.types";

export type ModuleProps = {
	whyChooseUsHeading: Headings;
	backgroundImage: Cover;
	imageText: {
		cover: Cover;
		title: string;
		description: string;
	}[];
};
