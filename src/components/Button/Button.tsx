import MuiButton, { ButtonProps } from "@mui/material/Button";
import { ReactNode } from "react";

import { styles } from "./styles";

interface Props extends Omit<Omit<ButtonProps, "color">, "variant"> {
	children: ReactNode;
}

const Button: React.FC<Props> = ({ children, ...buttonProps }) => {
	return (
		<MuiButton
			color='primary'
			variant='contained'
			size='medium'
			sx={styles}
			fullWidth
			{...buttonProps}>
			{children}
		</MuiButton>
	);
};

export default Button;
