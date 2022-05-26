import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Posts } from "src/typings/posts.types";

interface PostsState {
	query: string;
	setQuery: Dispatch<SetStateAction<string>>;
}

const initialState: PostsState = {
	query: "",
	setQuery: () => {},
};

const PostQueryContext = createContext(initialState);

type Props = {
	children: React.ReactNode;
};

const PostQueryProvider = ({ children }: Props) => {
	const [query, setQuery] = useState("");

	return (
		<PostQueryContext.Provider value={{ query, setQuery }}>
			{children}
		</PostQueryContext.Provider>
	);
};

export { PostQueryProvider, PostQueryContext };
