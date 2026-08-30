import { readonly, ref } from 'vue'
import { type ICategory, type IProductInfo } from '@/types/old/Data'

const DEFAULT_CATEGORY_ID = 'AI'

const categories = ref<ICategory[]>([])
const products = ref<IProductInfo[]>([])

let categoriesRequest: Promise<void> | undefined
let productsRequest: Promise<void> | undefined

async function fetchJson<T>(url: string): Promise<T> {
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

function findCategoryById(id: string | undefined): ICategory | undefined {
  return categories.value.find((category) => category.id === id)
}

function findProductById(id: string | undefined): IProductInfo | undefined {
  return products.value.find((product) => product.id === id)
}

function findProductByIdAndType(
  id: string | undefined,
  type: string | undefined
): IProductInfo | undefined {
  return products.value.find((product) => product.id === id && product.type === type)
}

function getProductsByType(type: string): IProductInfo[] {
  return products.value.filter((product) => product.type === type)
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
