import ImageText from "./ImageText";
import ImageCenter from "./ImageCenter";

import { ModuleProps } from "./ModuleHeroBanner.types";

const stylesMap: { [style: string]: any } = {
	"style-a": ImageText,
	"style-b": ImageCenter,
};

interface Props {
	moduleProps: ModuleProps;
}

const ModuleHeroBanner: React.FC<Props> = ({ moduleProps }) => {
	const ModuleComponent = stylesMap[moduleProps.style];

	return <ModuleComponent {...moduleProps} />;
};

export default ModuleHeroBanner;
