import "swiper/css";
import "swiper/css/scrollbar";
import type { AppProps } from "next/app";
import { useApollo } from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import React from "react";
import ThemeProvider from "src/theme";
import Layout from "src/components/Layout";

const App = ({ Component, pageProps }: AppProps) => {
	const apolloClient = useApollo(pageProps);

	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ApolloProvider client={apolloClient}>
				<ThemeProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</ApolloProvider>
		</>
	);
};

export default App;
