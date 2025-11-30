import { defineField, defineType } from 'sanity'
import { BookIcon } from '@sanity/icons'

export default defineType({
  name: 'project',
  title: 'DIY Project',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Summary',
      description: 'Appears on the homepage card (approx 2 sentences)',
      type: 'text',
      rows: 3
    }),
    // THE PRO EDITOR
    defineField({
      name: 'body',
      title: 'Article Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'}, 
              {title: 'Strike', value: 'strike-through'},
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ]
        },
        {
           type: 'table',
           title: 'Comparison Table' 
        }
      ]
    }),
    // THE NEW SEO TOOL
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo', 
    }),
  ],
})