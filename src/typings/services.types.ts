import { Cover } from "./common.types";

export type ServiceTypes = "Khám chuyên khoa" | "Khám kĩ thuật" | "Khám dịch vụ";

export interface Services {
	attributes: {
		name: string;
		type: ServiceTypes;
		slug: string;
		cover: Cover;
		highlights: {
			text: string;
		}[];
	};
}
