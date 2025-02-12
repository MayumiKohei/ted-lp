import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	output: "export",
	images: {
		unoptimized: true,
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
