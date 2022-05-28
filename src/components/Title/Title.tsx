import Typography from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { SxProps } from "@mui/material/styles";

interface Props {
	title1: string;
	title2?: string;
	highlightedText?: string;
	variant?: Variant;
	sx?: SxProps;
	inline?: boolean;
}

const Title: React.FC<Props> = ({
	title1,
	title2,
	highlightedText = "title2",
	variant = "h3",
	sx,
	inline = true,
}) => {
	return (
		<>
			<Typography
				variant={variant}
				sx={{
					...sx,
					display: inline ? "inline" : "block",
					color: highlightedText === "title1" ? "error.main" : "primary.darker",
				}}>
				{title1 + " "}
			</Typography>
			{Boolean(title2) && (
				<Typography
					variant={variant}
					sx={{
						...sx,
						display: inline ? "inline" : "block",
						color:
							highlightedText === "title2" ? "error.main" : "primary.darker",
					}}>
					{title2}
				</Typography>
			)}
		</>
	);
};

export default Title;
