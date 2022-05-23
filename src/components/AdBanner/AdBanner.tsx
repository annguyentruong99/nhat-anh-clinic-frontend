import { Cover } from "src/typings/common.types";
import { StyledBox } from "./styles";

interface Props {
	cover: Cover;
}

const AdBanner: React.FC<Props> = ({
	cover: {
		data: {
			attributes: { url },
		},
	},
}) => (
	<StyledBox
		sx={{
			backgroundImage:
				process.env.NODE_ENV === "production"
					? `url(${url})`
					: `url(http://localhost:1337${url})`,
			backgroundPosition: "50% 50%",
			backgroundRepeat: "no-repeat",
			objectFit: "cover",
		}}
	/>
);

export default AdBanner;
