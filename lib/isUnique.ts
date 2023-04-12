// Note: this assumes that every document that has a slug field

import { SlugValidationContext } from "sanity"

// have it on the `slug` field at the root
export async function isUniqueAcrossAllDocuments(slug: string, context: SlugValidationContext) {
	const { document, getClient } = context
	const client = getClient({ apiVersion: '2022-12-07' })
	const id = document?._id.replace(/^drafts\./, '')
	const params = {
		draft: `drafts.${id}`,
		published: id,
		slug,
	}
	const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`
	const result = await client.fetch(query, params)
	return result
}

export async function isUnique(string: string, context: SlugValidationContext) {
	const { document, getClient } = context
	const client = getClient({ apiVersion: '2022-12-07' })
	const id = document?._id.replace(/^drafts\./, '')
	const params = {
		draft: `drafts.${id}`,
		published: id,
		string,
	}
	const query = `!defined(*[_type == "" && !(_id in [$draft, $published]) && slug.current == $slug][0]._id)`
	const result = await client.fetch(query, params)
	return result
}