/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["localhost", "127.0.0.1", "storage.googleapis.com"],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	webpack(config) {
		return config;
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
