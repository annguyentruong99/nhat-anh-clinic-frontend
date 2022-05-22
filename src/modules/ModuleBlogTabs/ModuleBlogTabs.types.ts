import { Cover, Headings } from "src/typings/common.types";

export type ModuleProps = {
	heading: Headings;
	ads: {
		cover: Cover;
	}[];
};
