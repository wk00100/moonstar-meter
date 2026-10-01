/// <reference types="vite-ssg" />
import { readFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function readData<T>(fileName: string): T {
  const file = fileURLToPath(new URL(`./public/data/${fileName}`, import.meta.url))
  return JSON.parse(readFileSync(file, 'utf-8'))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  ssr: {
    // Bundle FontAwesome so vue-fontawesome and svg-core share one icon library while prerendering;
    // otherwise library.add() lands in a different copy and every icon renders empty.
    noExternal: [/^@fortawesome\//]
  },
  ssgOptions: {
    // products/AI/index.html instead of products/AI.html
    dirStyle: 'nested',
    // Dynamic routes are not discovered automatically, so list them from the data files.
    includedRoutes(paths) {
      const categories = readData<{ id: string }[]>('types.json')
      const products = readData<{ id: string; type: string }[]>('product_info.json')

      const categoryPaths = categories.map((category) => `/products/${category.id}`)
      // An id containing "/" would become nested folders that the URL cannot map back to.
      const productPaths = products
        .filter((product) => !product.id.includes('/'))
        .map((product) => `/products/${product.type}/${product.id}`)

      // `paths` also holds the raw patterns (":type", catch-all "*"); keep concrete ones only.
      const staticPaths = paths.filter((path) => !/[:*]/.test(path))

      return [...new Set([...staticPaths, ...categoryPaths, ...productPaths])]
    }
  }
})
