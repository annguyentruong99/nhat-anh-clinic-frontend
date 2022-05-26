export const filterData = (query: string, data: any) => {
	if (!query.length) {
		return data;
	} else {
		const filterByName = data.filter((d) =>
			d.title.toLowerCase().includes(query),
		);
		if (!filterByName.length) {
			const filterByContent = data.filter((d) =>
				d.content.toLowerCase().includes(query),
			);
			return filterByContent;
		}
		return filterByName;
	}
};
