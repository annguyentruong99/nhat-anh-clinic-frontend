const withGraphql = require("next-plugin-graphql");

/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	webpack(config) {
		return config;
	},
};

module.exports = withGraphql(nextConfig);
