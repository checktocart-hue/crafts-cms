import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO & Social',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title (Google Title)',
      description: 'The blue link text on Google. Keep it under 60 characters.',
      type: 'string',
      validation: Rule => Rule.max(60).warning('Title is too long for Google.')
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      description: 'The gray text under the link. Include your keywords here!',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(160).warning('Description is too long.')
    }),
    defineField({
      name: 'focusKeyword',
      title: 'Focus Keyword',
      description: 'The main keyword you want to rank for (e.g., "Best Book Nook").',
      type: 'string',
    })
  ]
})