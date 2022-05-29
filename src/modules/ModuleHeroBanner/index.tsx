import { useState, useEffect } from "react";
import ImageText from "./ImageText";
import BlogBanner from "./BlogBanner";
import ServicesBanner from "./ServicesBanner";
import ServiceBanner from "./ServiceBanner";

import { ModuleProps } from "./ModuleHeroBanner.types";

const stylesMap: { [style: string]: any } = {
	"style-a": ImageText,
	"style-b": BlogBanner,
	"style-c": ServicesBanner,
	"style-e": ServiceBanner,
};

interface Props {
	moduleProps: Omit<ModuleProps, "highlights">;
	highlights?: {
		id: number;
		text: string;
	}[];
}

const ModuleHeroBanner: React.FC<Props> = ({ moduleProps, highlights }) => {
	const ModuleComponent = stylesMap[moduleProps.style];
	const [highlightsData, setHighlightsData] = useState<
		{
			id: number;
			text: string;
		}[]
	>([]);

	useEffect(() => {
		if (Boolean(highlights?.length) && moduleProps.style === "style-e") {
			setHighlightsData(
				highlights as {
					id: number;
					text: string;
				}[],
			);
		}
	}, [highlights, moduleProps.style]);

	return (
		<ModuleComponent
			{...moduleProps}
			highlights={moduleProps.style === "style-e" ? highlightsData : undefined}
		/>
	);
};

export default ModuleHeroBanner;
