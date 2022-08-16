import { defineType, defineField } from "sanity";

const themeColours = [
	defineField({ name: 'primaryBackground', type: 'color' }),
	defineField({ name: 'primaryText', type: 'color' }),
]
for (const field of themeColours) {
	field.fieldset = "themeColours";
	field.validation = Rule => Rule.required();
}

const accentColours = [
	defineField({ name: 'primaryAccent', type: 'color' }),
	defineField({ name: 'secondaryAccent', type: 'color' }),
	defineField({ name: 'successAccent', type: 'color' }),
	defineField({ name: 'failureAccent', type: 'color' }),
]
for (const field of accentColours) {
	field.fieldset = "accentColours"
	field.validation = Rule => Rule.custom((value, context) => {
		const path: any = context.path;
		if (path[0] == 'defaultTheme' && !value) {
			return 'Accent colours are required!';
		}

		return true
	})
}

const calculatedColourOverrides = [
	defineField({ name: 'secondaryBackground', type: 'color' }),
	defineField({ name: 'oppositeBackground', type: 'color' }),
	defineField({ name: 'primaryBorder', type: 'color' }),
	defineField({ name: 'mediumAccent', type: 'color' }),
]
for (const field of calculatedColourOverrides) { field.fieldset = 'calculatedColourOverrides' }

const colourFields:any = [...themeColours, ...accentColours, ...calculatedColourOverrides]

/**
*	Add readable titles to all fields without titles
*
*/
for (const field of colourFields) {
	const nameParts = field.name.split(/(?=[A-Z])/);
	nameParts[0] = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1)
	field.title = field.title ? field.title : nameParts.join(" ")
	field.options = {
		disableAlpha: true
	}
}

const calculatedOverrideField = defineField({
	title: 'Override Calculated Colours',
	name: 'calculatedColourOverride',
	type: 'boolean',
	description: "Only use this field if you're certain you know what you're doing. The calculated values will work in most circumstances.",
	initialValue: false,
	fieldset: 'options'
})

const fieldSets = [
	{
		name: 'options',
		title: 'Theme Options',
		readOnly: true,
		options: {
			collapsible: false, // Makes the whole fieldset collapsible
			collapsed: false, // Defines if the fieldset should be collapsed by default or not
			columns: 2 // Defines a grid for the fields and how many columns it should have
		}
	},
	{
		name: 'themeColours',
		title: 'Theme Colours',
		readOnly: true,
		options: {
			collapsible: true, // Makes the whole fieldset collapsible
			collapsed: false, // Defines if the fieldset should be collapsed by default or not
			columns: 2 // Defines a grid for the fields and how many columns it should have
		}
	},
	{
		name: 'accentColours',
		title: 'Accent Colours',
		readOnly: true,
		hidden: ({ currentUser, value, parent }: any) => {
			return parent?.accentOverride == false;
		},
		options: {
			collapsible: true, // Makes the whole fieldset collapsible
			collapsed: false, // Defines if the fieldset should be collapsed by default or not
			columns: 2 // Defines a grid for the fields and how many columns it should have
		}

	},
	{
		name: 'calculatedColourOverrides',
		title: 'Calculated Colour Overrides',
		readOnly: true,
		hidden: ({ currentUser, value, parent }: any) => {
			return parent?.calculatedColourOverride == false;
		},
		options: {
			collapsible: true, // Makes the whole fieldset collapsible
			collapsed: false, // Defines if the fieldset should be collapsed by default or not
			columns: 2 // Defines a grid for the fields and how many columns it should have
		}
	}
]

export const theme = defineType({
	title: 'Site Theme',
	name: 'theme',
	type: 'document',
	groups: [
		{
			name: 'defaultThemeGroup',
			title: 'Default Theme',
		},
		{
			name: 'darkThemeGroup',
			title: 'Dark Theme',
		},
	],
	fields: [
		defineField({
			title: 'Logo',
			name: 'logo',
			type: 'image',
			description: 'Site logo displayed in header. Ideally an SVG',
			// validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Signature',
			name: 'signature',
			type: 'image',
			description: 'Signature used across the site.',
			// validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Default Theme',
			name: 'defaultTheme',
			type: 'object',
			group: 'defaultThemeGroup',
			fieldsets: fieldSets,
			fields: [
				calculatedOverrideField,
				...themeColours,
				...accentColours,
				...calculatedColourOverrides
			]
		}),
		defineField({
			title: 'Dark Theme',
			name: 'darkTheme',
			type: 'object',
			group: 'darkThemeGroup',
			fieldsets: fieldSets,
			fields: [
				calculatedOverrideField,
				defineField({
					title: 'Override Default Accents',
					name: 'accentOverride',
					type: 'boolean',
					initialValue: false,
					fieldset: 'options'
				}),
				...themeColours,
				...accentColours,
				...calculatedColourOverrides
			]
		})
	]
})
