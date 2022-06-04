import { defineConfig } from 'histoire'
import { HstScreenshot } from '@histoire/plugin-screenshot'

export default defineConfig({
  setupFile: '/src/histoire.setup.ts',
  plugins: [
    HstScreenshot({})
  ]
})