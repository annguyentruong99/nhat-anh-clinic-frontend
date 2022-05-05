import MuiButton, { ButtonProps } from "@mui/material/Button";
import { ReactNode } from "react";

interface Props extends Omit<Omit<ButtonProps, "color">, "variant"> {
	children: ReactNode;
}

const Button: React.FC<Props> = ({ children, ...buttonProps }) => {
	return (
		<MuiButton
			color='primary'
			variant='contained'
			size='medium'
			fullWidth
			{...buttonProps}>
			{children}
		</MuiButton>
	);
};

export default Button;
