import { defineType, defineField } from "sanity";

const themeColours = [
	defineField({ name: 'primaryBackground', type: 'color' }),
	defineField({ name: 'primaryText', type: 'color' }),
]

const accentColours = [
	defineField({ name: 'primaryAccent', type: 'color' }),
	defineField({ name: 'secondaryAccent', type: 'color' }),
	defineField({ name: 'mediumAccent', type: 'color' }),
	defineField({ name: 'successAccent', type: 'color' }),
	defineField({ name: 'failureAccent', type: 'color' }),
]

const calculatedColourOverrides = [
	defineField({ name: 'secondaryBackground', type: 'color' }),
	defineField({ name: 'darkerBackground', type: 'color' }),
	defineField({ name: 'oppositeBackground', type: 'color' }),
	defineField({ name: 'primaryBorder', type: 'color' }),
]

const colourFields = [...themeColours, ...accentColours, ...calculatedColourOverrides]

const calculatedOverrideField = defineField({
	title: 'Override Calculated Colours',
	name: 'calculatedColourOverride',
	type: 'boolean',
	fieldset: 'options'
})

/**
*	Add readable titles to all fields without titles
*
*/
for (const field of colourFields) {
	const nameParts = field.name.split(/(?=[A-Z])/);
	nameParts[0] = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1)
	field.title = field.title ? field.title : nameParts.join(" ")
}

for (const field of themeColours) { 
	field.fieldset = "themeColours"
}
for (const field of accentColours) { 
	field.fieldset = "accentColours"
	
}
for (const field of calculatedColourOverrides) {
	field.fieldset = 'calculatedColourOverrides'
	field.hidden = ({ parent, value }) => {
		return parent?.calculatedColourOverride == false;
	}
}

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
		// hidden: true,
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
			name: 'defaultTheme',
			title: 'Default Theme',
		},
		{
			name: 'darkTheme',
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
			name: 'default',
			type: 'object',
			group: 'defaultTheme',
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
			name: 'dark',
			type: 'object',
			group: 'darkTheme',
			fieldsets: fieldSets,
			fields: [
				defineField({
					title: 'Override Default Accents',
					name: 'accentOverride',
					type: 'boolean',
					fieldset: 'options'
				}),
				calculatedOverrideField,
				...themeColours,
				...accentColours,
				...calculatedColourOverrides
			]
		})
	]
})
