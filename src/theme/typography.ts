import { pxToRem } from "src/utils/getFontValue";

const FONT_PRIMARY = "Manrope, sans-serif";
const FONT_SECONDARY = "Inter, sans-serif";

const typography = {
	h1: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 700,
		fontSize: pxToRem(34),
		lineHeight: pxToRem(48),
		letterSpacing: 2,
	},
	h2: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 700,
		fontSize: pxToRem(20),
		lineHeight: pxToRem(28),
	},
	h3: {
		fontFamily: FONT_PRIMARY,
		fontWeight: 700,
		fontSize: pxToRem(20),
		lineHeight: pxToRem(28),
	},
	body1: {
		fontFamily: FONT_SECONDARY,
		fontWeight: 500,
		fontSize: pxToRem(16),
		lineHeight: pxToRem(24),
	},
	body2: {
		fontFamily: FONT_SECONDARY,
		fontWeight: 500,
		fontSize: pxToRem(14),
		lineHeight: pxToRem(20),
	},
	caption: {
		fontFamily: FONT_SECONDARY,
		fontWeight: 500,
		fontSize: pxToRem(12),
		lineHeight: pxToRem(20),
	},
	button: {
		fontFamily: FONT_SECONDARY,
		fontWeight: 600,
		fontSize: pxToRem(14),
		lineHeight: pxToRem(20),
		textTransform: "uppercase",
	},
} as const;

export default typography;
