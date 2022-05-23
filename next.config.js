/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: false,
	reactStrictMode: true,
	images: {
		domains: ["localhost", "127.0.0.1", "storage.googleapis.com"],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	webpack(config) {
		return config;
	},
};

module.exports = nextConfig;
