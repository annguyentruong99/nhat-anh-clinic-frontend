import { Title1, Title2 } from "./styles";

import { Variant } from "@mui/material/styles/createTypography";
import { SxProps } from "@mui/material/styles";

interface Props {
	title1: string;
	title2?: string;
	variant?: Variant;
	sx?: SxProps;
}

const Title: React.FC<Props> = ({ title1, title2, variant = "h3", sx }) => {
	return (
		<>
			<Title1 variant={variant} sx={sx}>
				{title1 + " "}
			</Title1>
			{Boolean(title2) && (
				<Title2 variant={variant} sx={sx}>
					{title2}
				</Title2>
			)}
		</>
	);
};

export default Title;
