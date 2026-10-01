/// <reference types="node" />
import { readonly, ref } from 'vue'
import { type ICategory, type IProductInfo } from '@/types/old/Data'

const DEFAULT_CATEGORY_ID = 'AI'

const categories = ref<ICategory[]>([])
const products = ref<IProductInfo[]>([])

let categoriesRequest: Promise<void> | undefined
let productsRequest: Promise<void> | undefined

async function fetchJson<T>(url: string): Promise<T> {
  if (import.meta.env.SSR) {
    // Prerendering runs in Node where relative fetch() has no origin, so read public/ directly.
    const { readFile } = await import('node:fs/promises')
    const { join } = await import('node:path')
    return JSON.parse(await readFile(join(process.cwd(), 'public', url), 'utf-8'))
  }

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to load ${url}`)
  }

  return response.json()
}

function normalizeRouteParam(param: string | string[] | undefined): string | undefined {
  return Array.isArray(param) ? param[0] : param
}

async function loadCategories(): Promise<void> {
  if (categories.value.length > 0) return

  if (categoriesRequest === undefined) {
    categoriesRequest = fetchJson<ICategory[]>('/data/types.json').then((data) => {
      categories.value = data
    })
  }

  await categoriesRequest
}

async function loadProducts(): Promise<void> {
  if (products.value.length > 0) return

  if (productsRequest === undefined) {
    productsRequest = fetchJson<IProductInfo[]>('/data/product_info.json').then((data) => {
      products.value = data
    })
  }

  await productsRequest
}

async function loadProductData(): Promise<void> {
  await Promise.all([loadCategories(), loadProducts()])
}

// Netlify serves prerendered folders at lowercase URLs (/products/c/), so route params
// arrive lowercased. Ids are matched case-insensitively to keep those URLs working.
function sameId(a: string | undefined, b: string | undefined): boolean {
  return a !== undefined && b !== undefined && a.toLowerCase() === b.toLowerCase()
}

function findCategoryById(id: string | undefined): ICategory | undefined {
  return categories.value.find((category) => sameId(category.id, id))
}

function findProductById(id: string | undefined): IProductInfo | undefined {
  return products.value.find((product) => sameId(product.id, id))
}

function findProductByIdAndType(
  id: string | undefined,
  type: string | undefined
): IProductInfo | undefined {
  return products.value.find((product) => sameId(product.id, id) && sameId(product.type, type))
}

function getProductsByType(type: string): IProductInfo[] {
  return products.value.filter((product) => sameId(product.type, type))
}

export function useProductData() {
  return {
    categories: readonly(categories),
    products: readonly(products),
    defaultCategoryId: DEFAULT_CATEGORY_ID,
    loadCategories,
    loadProducts,
    loadProductData,
    normalizeRouteParam,
    findCategoryById,
    findProductById,
    findProductByIdAndType,
    getProductsByType
  }
}
