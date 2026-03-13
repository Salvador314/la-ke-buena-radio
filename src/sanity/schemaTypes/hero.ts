import { defineField, defineType } from 'sanity';

export const heroType = defineType({
    name: 'heroSlide',
    type: 'document',
    title: 'Hero Carousel',
    fields: [
        defineField({
            name: 'artistName',
            type: 'string',
            title: 'Artist Name',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'quote',
            type: 'text',
            title: 'Quote',
            description: 'A Short catchy quote or sub-header',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Background Image',
            options: {
                hotspot: true
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
});