import ImageText from "./ImageText";
import BlogBanner from "./BlogBanner";
import ServicesBanner from "./ServicesBanner";

import { ModuleProps } from "./ModuleHeroBanner.types";

const stylesMap: { [style: string]: any } = {
	"style-a": ImageText,
	"style-b": BlogBanner,
	"style-c": ServicesBanner,
};

interface Props {
	moduleProps: ModuleProps;
}

const ModuleHeroBanner: React.FC<Props> = ({ moduleProps }) => {
	const ModuleComponent = stylesMap[moduleProps.style];

	return <ModuleComponent {...moduleProps} />;
};

export default ModuleHeroBanner;
