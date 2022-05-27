export type Headings = {
	title: string;
	subtitle?: string;
};

export type Cover = {
	data: {
		attributes: {
			url: string;
			alternativeText: string;
		};
	};
};