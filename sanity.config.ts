import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {table} from '@sanity/table' // <--- Importing the plugin

export default defineConfig({
  name: 'default',
  title: 'crafts-cms',

  projectId: 'nrmr5169', // <--- Your ID is safe here
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    table(), // <--- Activating the plugin
  ],

  schema: {
    types: schemaTypes,
  },
})