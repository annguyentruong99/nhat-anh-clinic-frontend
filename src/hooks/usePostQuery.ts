import { useContext } from "react";
import { PostQueryContext } from "src/contexts/PostQueryContext";

export const usePostQuery = () => useContext(PostQueryContext);
