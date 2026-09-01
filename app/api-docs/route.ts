import { ApiReference } from "@scalar/nextjs-api-reference";

/**
 * Interactive documentation viewer at /api-docs.
 *
 * It reads the contract from /api/openapi, so it always reflects whatever is in
 * openapi/openapi.yaml — there is no second copy to keep in sync.
 */
export const GET = ApiReference({
	url: "/api/openapi",
	pageTitle: "Salesfam API — Documentation",
});
