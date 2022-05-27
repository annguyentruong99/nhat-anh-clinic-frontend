import React, { Dispatch, SetStateAction } from "react";

import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

interface Props {
	inputValue: string;
	setInputValue: Dispatch<SetStateAction<string>>;
	searchValue: string;
	setSearchValue: Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({
	inputValue,
	setInputValue,
	searchValue,
	setSearchValue,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleSearchClick = () => {
		setSearchValue(inputValue);
	};

	const handleClearSearchValue = () => {
		setSearchValue("");
		setInputValue("");
	};

	const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			setSearchValue(inputValue);
			event.preventDefault();
		}
	};

	return (
		<FormControl variant='outlined' sx={{ width: "100%" }}>
			<InputLabel htmlFor='search-bar' sx={{ background: "white" }}>
				Tìm kiếm thông tin bệnh lý bạn muốn đọc tại đây
			</InputLabel>
			<OutlinedInput
				fullWidth
				sx={{ backgroundColor: "white" }}
				id='search-bar'
				type='text'
				value={inputValue}
				onInput={handleChange}
				onKeyPress={handleEnterPress}
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
							onClick={
								Boolean(searchValue.length)
									? handleClearSearchValue
									: handleSearchClick
							}
							edge='end'>
							{Boolean(searchValue.length) ? (
								<ClearRoundedIcon />
							) : (
								<SearchOutlinedIcon />
							)}
						</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
	);
};

export default SearchBar;
