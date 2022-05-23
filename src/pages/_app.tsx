import "swiper/css";
import "swiper/css/scrollbar";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import ThemeProvider from "src/theme";
import Layout from "src/components/Layout";
import ErrorBoundary from "src/components/ErrorBoundary";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ErrorBoundary>
				<ThemeProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</ErrorBoundary>
		</>
	);
};

export default App;
