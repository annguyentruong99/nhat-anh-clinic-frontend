const withGraphql = require("next-plugin-graphql");

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		return config;
	},
};

module.exports = withGraphql(nextConfig);
