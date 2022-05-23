import axios from "axios";

export const request = axios.create({
	baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
	timeout: 30000,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});
