import {defineField, defineType} from 'sanity'

export const adType = defineType({
  name: 'ad',
  title: 'Horizontal Ads',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({name: 'category', type: 'string'}),
    defineField({name: 'description', type: 'string'}),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'link', type: 'url', title: 'Ad Redirect Link' }),
  ],
})