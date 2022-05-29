import Head from "next/head";
import { forwardRef, ReactNode } from "react";
import CorporationSeo from "src/components/Seo/CorporationSeo";
import LocalBusinessSeo from "../Seo/LocalBusiness";

import Box, { BoxProps } from "@mui/material/Box";
import { NextRouter } from "next/router";

interface Props extends BoxProps {
	children: ReactNode;
	meta?: ReactNode;
	title: string;
	description: string;
	router: NextRouter;
}

// eslint-disable-next-line react/display-name
const Page = forwardRef<HTMLDivElement, Props>(
	({ children, title = "", description = "", meta, router, ...other }, ref) => {
		const domain = process.env.NEXT_PUBLIC_BASE_URL;
		const url = router && router.asPath ? router.asPath : undefined;
		const canonical =
			url && url === "/" ? domain : (((domain as string) + url) as string);

		return (
			<>
				<Head>
					<title>{title}</title>
					<meta name='description' content={description} />
					<meta content='IE=edge' httpEquiv='X-UA-Compatible' />

					<meta content='vi_VN' property='og:locale' />
					<meta content={title} property='og:title' />
					<meta content={description} property='og:description' />
					<meta content={canonical} property='og:url' />
					{url === "/" && (
						<>
							<LocalBusinessSeo />
							<CorporationSeo />
						</>
					)}
				</Head>

				<Box ref={ref} {...other}>
					{children}
				</Box>
			</>
		);
	},
);

export default Page;
