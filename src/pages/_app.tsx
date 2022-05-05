import type { AppProps } from "next/app";
import { useApollo } from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import { NextPage } from "next";
import React, { ReactElement, ReactNode } from "react";
import ThemeProvider from "src/theme";

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
	Component: NextPageWithLayout;
}

const App = ({ Component, pageProps }: MyAppProps) => {
	const apolloClient = useApollo(pageProps);

	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ApolloProvider client={apolloClient}>
				<ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
			</ApolloProvider>
		</>
	);
};

export default App;
