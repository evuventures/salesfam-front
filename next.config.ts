import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// The /api/openapi route handler reads openapi/openapi.yaml from disk.
	// Next cannot infer that dependency by analysing the code, so we declare it
	// here to make the file travel with the production bundle.
	outputFileTracingIncludes: {
		"/api/openapi": ["./openapi/**/*"],
	},
};

export default nextConfig;
