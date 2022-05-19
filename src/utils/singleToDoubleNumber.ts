export const convertSingleToDoubleDigit = (number: number) => {
	let n = String(number);
	if (n.length == 1) n = "0" + n;
	return n;
};
