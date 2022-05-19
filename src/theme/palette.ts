const PRIMARY = {
	light: "#F5F9FE",
	main: "#1863F6",
	dark: "#0E3F9F",
	darker: "#0F2F64",
};

const WARNING = {
	main: "#FAB60B",
};

const ERROR = {
	main: "#EE6868",
};

const GREY = {
	0: "#FFFFFF",
	100: "#E5E7EA",
	200: "#CED2D6",
	300: "#9EA5AD",
	400: "#7F8790",
	500: "#676E76",
	600: "#31373C",
	700: "#151618",
};

const palette = {
	common: { black: "#151618", white: "#FFFFFF" },
	primary: { ...PRIMARY, contrastText: "#FFFFFF" },
	warning: WARNING,
	error: ERROR,
	grey: GREY,
	action: {
		disabledBackground: GREY[400],
		hoverOpacity: 0.08,
	},
};

export default palette;
