import { ReactNode, useMemo } from "react";
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
	ThemeOptions,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Shadows } from "@mui/material/styles/shadows";

import palette from "./palette";
import typography from "./typography";
import components from "./overrides";
import breakpoints from "./breakpoints";

interface Props {
	children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
	const themeOptions: ThemeOptions = useMemo(
		() => ({
			palette,
			typography,
			shadows: Array.from(new Array(25), (val, i) => "none") as Shadows,
			components,
			breakpoints,
		}),
		[],
	);

	const theme = createTheme(themeOptions);

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</MuiThemeProvider>
	);
};

export default ThemeProvider;
