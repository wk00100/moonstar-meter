const productImages = import.meta.glob<string>('/src/assets/images/products/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default'
})

export function getProductImageUrl(name?: string): string | undefined {
  if (!name) return undefined
  return productImages[`/src/assets/images/products/${name}.jpg`]
}
