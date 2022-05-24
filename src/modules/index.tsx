import { useEffect, useState } from "react";
import { ModulesMap } from "src/utils/getModulesMap";

interface Props {
	modulesMapData: ModulesMap;
	modulesData: any;
}

const ModulePage: React.FC<Props> = ({ modulesData, modulesMapData }) => {
	const [modules, setModules] = useState<any | null>(null);
	const [modulesMap, setModulesMap] = useState<ModulesMap | null>(null);

	useEffect(() => {
		if (Boolean(modulesData) && Boolean(modulesMapData)) {
			setModules(modulesData);
			setModulesMap(modulesMapData);
		}
	}, [modulesData, modulesMapData]);

	if (!modules) return null;

	return modules.map((module: any, ind: number) => {
		if (!module?.__component) return null;
		const Module = modulesMap?.[module.__component].component;
		if (!Module) {
			console.error(`Unexpected Module ${module.__component}`);
			return null;
		}
		return <Module key={ind} {...modulesMap?.[module.__component].props} />;
	});
};

export default ModulePage;
