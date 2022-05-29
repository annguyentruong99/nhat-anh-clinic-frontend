import { Cover } from "./common.types";

export interface Posts {
	attributes: {
		title: string;
		slug: string;
		content: string;
		cover: Cover;
		tags: string | null;
		publishedAt?: string | Date;
		updatedAt?: string | Date;
	};
}
