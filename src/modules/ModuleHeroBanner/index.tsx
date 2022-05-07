import ImageText from "./ImageText";

import { ModuleStyles, ModuleProps } from "./ModuleHeroBanner.types";

const stylesMap: { [style: string]: any } = {
	"style-a": ImageText,
};

interface Props {
	style?: ModuleStyles;
	moduleProps: ModuleProps;
}

const ModuleHeroBanner: React.FC<Props> = ({
	style = "style-a",
	moduleProps,
}) => {
	const ModuleComponent = stylesMap[style];

	return <ModuleComponent {...moduleProps} />;
};

export default ModuleHeroBanner;
