import Link from "next/link";
import { BreadCrumbLink, LastBreadcrumb } from "./styles";

import Box from "@mui/material/Box";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {
	data: {
		name: string;
		link: string;
	}[];
}

const Breadcrumbs: React.FC<Props> = ({ data }) => {
	return (
		<MuiBreadcrumbs
			aria-label='breadcrumbs'
			separator={<NavigateNextIcon fontSize='small' />}>
			{data.map((d, ind) => {
				if (ind !== data.length - 1) {
					return (
						<Link passHref href={d.link} key={ind}>
							<BreadCrumbLink variant='h3'>{d.name}</BreadCrumbLink>
						</Link>
					);
				}
				return (
					<LastBreadcrumb noWrap variant='h3' key={ind}>
						{d.name}
					</LastBreadcrumb>
				);
			})}
		</MuiBreadcrumbs>
	);
};

export default Breadcrumbs;
