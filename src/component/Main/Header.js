import React from "react";
import { Input, Checkbox, Button } from "antd";
import { SearchStyleCheckBoxStyled } from "./Styled";
import debounce from "lodash.debounce";
import nicon from "../../download/n-icon.7z";

const { Search } = Input;
const options = [
	{
		label: "Thin",
		value: "thin",
	},
	{
		label: "Solid",
		value: "solid",
	},
	{
		label: "Regular",
		value: "regular",
	},
	{
		label: "Light",
		value: "Light",
	},

	{
		label: "Duotone",
		value: "duotone",
	},
	{
		label: "Brands",
		value: "brands",
	},
];

export default function Header({ setSearch, setStyles }) {
	const onChange = (checkedValues) => {
		setStyles(checkedValues);
	};
	const handleSearchKeyUp = debounce((e) => {
		setSearch(e.target.value);
	}, 500);

	return (
		<>
			<div style={{ textAlign: "center" }}>
				<Search
					placeholder="input search text"
					size="large"
					allowClear
					onSearch={(value) => setSearch(value)}
					onKeyUp={(e) => handleSearchKeyUp(e)}
					style={{
						width: 700,
						borderRadius: "16px !important",
						margin: 20,
						padding: "16px",
					}}
				/>
			</div>
			<SearchStyleCheckBoxStyled>
				<Checkbox.Group
					options={options}
					defaultValue={["solid", "brands"]}
					onChange={onChange}
				/>
				<a href={nicon} download>
					<Button>Download nicon</Button>
				</a>
			</SearchStyleCheckBoxStyled>
		</>
	);
}
