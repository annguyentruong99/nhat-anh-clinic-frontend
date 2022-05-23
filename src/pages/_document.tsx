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
					<meta name='theme-color' content={palette.primary.main} />

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
