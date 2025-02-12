import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.microcms-assets.io",
				pathname: "/assets/**",
			},
		], // microCMSのドメインを追加
	},
};

export default nextConfig;
