import Box from "@mui/material/Box";

interface Props {
	children?: React.ReactNode;
	value: number;
	index: number;
}

const TabPanel: React.FC<Props> = ({ children, value, index }) => {
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}>
			{value === index && <Box>{children}</Box>}
		</div>
	);
};

export default TabPanel;
