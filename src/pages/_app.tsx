import "swiper/css";
import "swiper/css/scrollbar";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ThemeProvider from "src/theme";
import Layout from "src/components/Layout";
import LoadingScreen from "src/components/LoadingScreen";
import { pageview, event } from "src/lib/gtag";

const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = (url: URL) => {
			(url as unknown as string) !== router.pathname
				? setLoading(true)
				: setLoading(false);
		};
		const handleComplete = (url: URL) => {
			setLoading(false);
			if (process.env.NODE_ENV === "production") {
				pageview(url);
			}
		};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
		};
	}, [router]);

	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ThemeProvider>
				{loading ? (
					<LoadingScreen />
				) : (
					<Layout>
						<Component {...pageProps} />
					</Layout>
				)}
			</ThemeProvider>
		</>
	);
};

export default App;
