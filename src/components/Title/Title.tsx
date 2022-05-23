import { Title1, Title2 } from "./styles";

import { Variant } from "@mui/material/styles/createTypography";

interface Props {
	title1: string;
	title2?: string;
	variant?: Variant;
}

const Title: React.FC<Props> = ({ title1, title2, variant = "h3" }) => {
	return (
		<>
			<Title1 variant={variant}>{title1 + " "}</Title1>
			{Boolean(title2) && <Title2 variant={variant}>{title2}</Title2>}
		</>
	);
};

export default Title;
