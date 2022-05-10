import { Cover } from "./common.types";

export interface Doctors {
	data: {
		attributes: {
			role: string;
			title: string;
			name: string;
			slug: string;
			description: string;
			cover: Cover;
		};
	};
}
