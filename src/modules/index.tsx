import { ModulesMap } from "src/utils/getModulesMap";

interface Props {
	modulesMap: ModulesMap;
	modules: any;
}

const ModulePage: React.FC<Props> = ({ modules, modulesMap }) => {
	if (!modules) return null;

	return modules.map((module, ind) => {
		if (!module?.__component) return null;
		const Module = modulesMap[module.__component].component;
		if (!Module) {
			console.error(`Unexpected Module ${module.__component}`);
			return null;
		}
		return <Module key={ind} {...modulesMap[module.__component].props} />;
	});
};

export default ModulePage;
