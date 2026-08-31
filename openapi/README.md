# API contract — working guide

This directory holds the API contract in **OpenAPI 3.1** format. We work
**API-first**: the contract is agreed *before* the code, and the types the
frontend uses are derived from it.

## ⚠️ This contract is a copy

The source of truth lives in **the backend repo**. What we have here is a
downstream copy. The agreed flow between teams is:

```
  front + back meeting
        │
        ▼
  back opens a draft PR with the contract
        │
        ▼
  front copies that YAML into openapi/openapi.yaml
        │
        ▼
  both teams build against it in parallel
```

**Do not edit `openapi.yaml` to design new endpoints.** If the frontend needs a
change, ask the backend team and let it come back through the same path.
Editing it here makes us compile against something the server does not serve —
and since everything still compiles, you will not find out until production.

To pull in a new version:

```bash
# 1. replace the file with the one from the draft PR (keep the header)
# 2. validate and regenerate
npm run api:lint
npm run api:types
# 3. commit openapi.yaml and schema.d.ts TOGETHER
```

Before copying, compare the hash with the one the backend put in the PR:

```bash
sha256sum openapi/openapi.yaml
```

## Why this instead of generated documentation

The common alternative (*code-first*) is to annotate the backend and generate
the documentation at the end. The problem is that the documentation always lags
behind and nobody treats it as binding.

Here the flow is reversed. `openapi.yaml` is the source of truth, and
`lib/api/schema.d.ts` is generated from it. Because the HTTP client is typed
against that file, **if the contract changes, the TypeScript build fails at
every point in the code that relied on the previous version**. The contract
stops being a PDF nobody reads and becomes something that breaks the build.

## Structure

| File | What it is | Edited by hand? |
|---|---|---|
| `openapi/openapi.yaml` | The contract. Copy of the backend's source of truth. | Only to copy in the new version |
| `redocly.yaml` (root) | Validation rules + generated types output path | Yes, rarely |
| `lib/api/schema.d.ts` | TypeScript types | **No — generated** |
| `lib/api/client.ts` | Typed HTTP client | Yes, for auth/headers |
| `app/api/openapi/route.ts` | Serves the contract at `/api/openapi` | No |
| `app/api-docs/route.ts` | Documentation viewer | No |

## Commands

```bash
npm run api:lint    # validates the contract is well-formed
npm run api:types   # regenerates lib/api/schema.d.ts from the contract
npm run api:check   # lint + types + drift check (this is what runs in CI)
```

## Flow for adding an endpoint

1. **Meeting with backend** to agree the shape of the endpoint.
2. Backend opens the **draft PR** with the updated contract.
3. Copy that YAML into `openapi/openapi.yaml` (compare the hash first).
4. `npm run api:lint` — it should not fail, but verify you copied it correctly.
5. `npm run api:types` — regenerate the types.
6. Use the endpoint from the frontend via `apiClient`.
7. **Commit `openapi.yaml` and `schema.d.ts` together.** CI rejects the PR if
   the second does not match the first.

You can start step 6 even if the backend does not exist yet: the types are
already there, and the code compiles.

## How to consume the API

```ts
import { apiClient } from "@/lib/api/client";

const { data, error } = await apiClient.GET("/health");

if (error) {
  // `error` has the shape of the contract's Error schema
  console.error(error.code, error.message);
  return;
}

// `data` has the shape of HealthStatus. `data.status` is "ok" | "degraded",
// not `string` — the contract's enum reaches all the way here.
console.log(data.status, data.version);
```

With parameters:

```ts
// Path param + query string, all checked at compile time
const { data } = await apiClient.GET("/users/{id}", {
  params: {
    path: { id: userId },
    query: { include: "profile" },
  },
});

// POST with a body typed against the contract's requestBody
const { data } = await apiClient.POST("/users", {
  body: { email, name },
});
```

Writing `apiClient.GET("/usuarios")` when the contract says `/users` **does not
compile**. Reading `data.nombre` when the schema declares `name` **does not
compile**.

## Browsable documentation

With `npm run dev`, the viewer is at **http://localhost:3000/api-docs**.

It reads the contract from `/api/openapi`, so it always reflects the current
YAML — there is no second copy to keep in sync.

## Contract conventions

We agreed these with backend. Use them as a checklist when reviewing their draft
PR: if any of this is missing, better to say so before copying the YAML than
after.

- **`operationId` is mandatory and unique.** It is the name code generators use.
  `getUserById`, not `get_user_2`.
- **Reuse with `$ref`.** Anything appearing in more than one endpoint goes into
  `components/schemas`. The linter warns about components defined but unused.
- **Mark mandatory fields with `required`.** Anything not listed there is
  generated as optional in TypeScript, and you will have to check it before
  using it. That is a feature, not an annoyance.
- **Document errors, not just the happy path.** Every operation should declare
  its 4xx responses. The linter enforces it.
- **Security is inherited from the root level.** For a public endpoint, override
  it explicitly with `security: []`.
- **Watch out for `:` in unquoted text.** YAML reads it as a key separator.
  Quote the whole string.

## Current status

The contract holds a single example endpoint, `/health`, which exists to verify
the whole chain works. **Delete it as soon as you add real endpoints**, along
with its schemas if they stop being used.

The `servers` entries point at placeholder URLs. Adjust them to the real
backend.
