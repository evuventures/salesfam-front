import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Serves the raw contract at /api/openapi.
 *
 * It exists so any external consumer can read the contract by URL: the docs
 * viewer at /api-docs, a client generator from another team, or a mock server.
 * The source of truth is still openapi/openapi.yaml on disk.
 *
 * force-static makes the YAML be read at build time and served as a static
 * file, with no disk access in production. Under `next dev` it is re-evaluated
 * on every request, so contract changes show up on reload.
 */
export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
	const spec = await readFile(
		path.join(process.cwd(), "openapi", "openapi.yaml"),
		"utf8",
	);

	return new Response(spec, {
		headers: {
			"content-type": "application/yaml; charset=utf-8",
			"cache-control": "public, max-age=0, must-revalidate",
		},
	});
}
