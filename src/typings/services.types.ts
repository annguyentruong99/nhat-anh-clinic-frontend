export type ServiceTypes =
	| "kham_chuyen_khoa"
	| "Kham_ki_thuat"
	| "kham_dich_vu";

export interface Services {
	data: {
		attributes: {
			name: string;
			type: ServiceTypes;
			slug: string;
			cover: {
				data: {
					attributes: {
						url: string;
					};
				};
			};
			highlights: {
				text: string;
			}[];
		};
	}[];
}
