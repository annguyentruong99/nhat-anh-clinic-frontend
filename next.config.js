const withGraphql = require("next-plugin-graphql");

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["localhost", "127.0.0.1"],
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

module.exports = withGraphql(nextConfig);
