import { useState } from "react";
import Image from "next/image";
import { ModuleProps } from "../ModuleHeroBanner.types";
import { usePostQuery } from "src/hooks";
import Title from "src/components/Title";
import SearchBar from "src/components/SearchBar";
import {
	StyledBox,
	TitleContainer,
	SearchBarContainer,
	ImageContainer,
} from "./styles";

import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const BlogBanner: React.FC<ModuleProps> = ({
	title,
	cover: {
		data: {
			attributes: { url, alternativeText },
		},
	},
}) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	const { query, setQuery } = usePostQuery();
	const [inputValue, setInputValue] = useState("");

	return (
		<StyledBox
			sx={{
				backgroundImage: {
					lg: "url(https://storage.googleapis.com/nhat-anh-media/abstract_4_d5fec5a262/abstract_4_d5fec5a262.png)",
				},
				backgroundRepeat: "no-repeat",
				backgroundSize: "249px 356px",
				backgroundPosition: "100% 35%",
			}}>
			<Container>
				<TitleContainer>
					<Title
						title1={title.title1}
						title2={title.title2}
						variant='h1'
						sx={{ fontSize: { md: "60px" }, lineHeight: { md: "80px" } }}
						inline={isDesktop}
					/>
				</TitleContainer>

				<SearchBarContainer>
					<SearchBar
						inputValue={inputValue}
						setInputValue={setInputValue}
						searchValue={query}
						setSearchValue={setQuery}
					/>
				</SearchBarContainer>

				<ImageContainer>
					<Image
						src={
							process.env.NODE_ENV === "production"
								? url
								: `http://localhost:1337${url}`
						}
						alt={alternativeText}
						width='1240'
						height={isDesktop ? "500" : "700"}
						objectFit='cover'
						objectPosition='top'
					/>
				</ImageContainer>
			</Container>
		</StyledBox>
	);
};

export default BlogBanner;
