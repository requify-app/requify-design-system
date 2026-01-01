import { preprocess } from 'svelte/compiler'
import adapter from '@sveltejs/adapter-node'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: [preprocess()]
}

export default config
