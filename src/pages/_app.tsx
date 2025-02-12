import "modern-css-reset/dist/reset.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
	weight: ["400", "700"], // 必要なウェイトを指定
	subsets: ["latin"], // 必要なサブセットを指定
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="stylesheet"
					href="https://use.typekit.net/cpu0oyy.css"
				/>
			</Head>
			<Component
				{...pageProps}
				notoSansJPClassName={notoSansJP.className}
			/>
		</>
	);
}
