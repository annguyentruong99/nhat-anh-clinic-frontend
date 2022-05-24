import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createCache from "@emotion/cache";
import palette from "src/theme/palette";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";

const createEmotionCache = () => createCache({ key: "css" });

export default class CustomDocument extends Document {
	render() {
		return (
			<Html lang='vi'>
				<Head>
					<meta charSet='utf-8' />
					<meta content='follow, index' name='robots' />
					<meta content='width=device-width, initial-scale=1, maximum-scale=1' />
					<meta name='theme-color' content={palette.primary.main} />
					<link
						rel='apple-touch-icon'
						sizes='57x57'
						href='/apple-icon-57x57.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='60x60'
						href='/apple-icon-60x60.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='72x72'
						href='/apple-icon-72x72.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='76x76'
						href='/apple-icon-76x76.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='114x114'
						href='/apple-icon-114x114.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='120x120'
						href='/apple-icon-120x120.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='144x144'
						href='/apple-icon-144x144.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='152x152'
						href='/apple-icon-152x152.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-icon-180x180.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='192x192'
						href='/android-icon-192x192.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='96x96'
						href='/favicon-96x96.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon-16x16.png'
					/>
					<link rel='manifest' href='/manifest.json'></link>

					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Manrope:wght@200;300;400;500;600;700;800&display=swap'
						rel='stylesheet'
					/>

					<meta
						name='description'
						content='Với đội ngũ y bác sĩ dày dặn kinh nghiệm, tay nghề cao với nhiều năm kinh nghiệm cùng trang thiệt bị y tế hiện đại, chúng tôi cam kết dịch vụ tối ưu và những trải nghiệm tuyệt vời cho khách hàng. Sức khỏe của bạn và gia đình là ưu tiên hàng đầu của chúng tôi!'
					/>
					<meta
						name='keywords'
						content='nhatanh,phong-kham,san-phu-khoa,sieu-am'
					/>
					<meta name='author' content='Nhat Anh General Clinic' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

CustomDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage;

	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () =>
		originalRenderPage({
			// eslint-disable-next-line react/display-name
			enhanceApp: (App) => (props) =>
				(
					<CacheProvider value={cache}>
						<App {...props} />
					</CacheProvider>
				),
		});

	const initialProps = await Document.getInitialProps(ctx);

	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(" ")}`}
			key={style.key}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		styles: [
			...React.Children.toArray(initialProps.styles),
			...emotionStyleTags,
		],
	};
};
