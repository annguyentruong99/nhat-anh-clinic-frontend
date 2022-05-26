import { Cover, Headings } from "src/typings/common.types";

export interface ModuleProps {
	heading: Headings;
	ads: {
		cover: Cover;
	}[];
}
