import { defineField, defineType } from 'sanity'
import { StarIcon } from '@sanity/icons'

export default defineType({
  name: 'review',
  title: 'Kit Review',
  icon: StarIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 }
    }),
    // 1. THIS IS THE MISSING FIELD WE ADDED
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      description: 'Internal summary or card preview text.',
      type: 'text',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
    }),
    defineField({
      name: 'price',
      title: 'Price Label',
      description: 'Type "Check Price" or "~$45" (Do not put exact static prices to avoid Amazon ban)',
      type: 'string',
    }),
    defineField({
      name: 'affiliateLink',
      title: 'Affiliate Link',
      type: 'url',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    // 2. THE PRO BODY EDITOR (Tables + Images)
    defineField({
      name: 'body',
      title: 'Article Body',
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
    // 3. THE SEO TOOL
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
})