import { createClient } from '@sanity/client'


export const customClient = createClient({
	projectId: 'ijjxi0wa',
	dataset: 'production',
	apiVersion: '2023-04-04',
})