import { createClient } from '@sanity/client'


export const customClient = createClient({
	projectId: 'hautfgiz',
	dataset: 'production',
	apiVersion: '2023-04-04',
})