import { Posts } from "src/typings/posts.types";

export const filterPostsData = (query: string, posts: Posts[]): Posts[] => {
	if (!query.length) {
		return posts;
	} else {
		const filterByName = posts.filter((d) =>
			d.attributes.title.toLowerCase().includes(query),
		);
		if (!filterByName.length) {
			const filterByContent = posts.filter((d) =>
				d.attributes.content.toLowerCase().includes(query),
			);
			return filterByContent;
		}
		return filterByName;
	}
};
