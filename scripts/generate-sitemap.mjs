import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, '..')

const BASE_URL = 'https://moonstar-meter-tw.netlify.app'
const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD

// Helper function to escape XML special characters
function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Read JSON files
const typesPath = path.join(projectRoot, 'public/data/types.json')
const productsPath = path.join(projectRoot, 'public/data/product_info.json')

const typesData = JSON.parse(fs.readFileSync(typesPath, 'utf-8'))
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf-8'))

// Collect all URLs as a Set to deduplicate
const urls = new Set()

// Netlify serves prerendered folders at lowercase URLs with a trailing slash
// (/products/C -> /products/c/), so list those final URLs to avoid redirects in the sitemap.
// Keep in sync with toCanonicalUrl() in src/composables/usePageHead.ts.
function toSitemapPath(...segments) {
  const encoded = segments.map((segment) => encodeURIComponent(segment.toLowerCase()))
  return `/${encoded.join('/')}${encoded.length > 0 ? '/' : ''}`
}

// Static pages. /products is left out: it redirects to /products/AI and canonicalizes there.
urls.add(toSitemapPath())
urls.add(toSitemapPath('about'))
urls.add(toSitemapPath('contact-us'))

// Category pages (isActive is not used by the site, so every category is public)
typesData.forEach((type) => {
  urls.add(toSitemapPath('products', type.id))
})

// Product detail pages
productsData.forEach((product) => {
  // Skip products whose category does not exist, since the router would redirect them.
  // Also skip ids containing "/": vite.config.ts cannot prerender them, so crawlers
  // would receive the home page HTML for that URL.
  const productType = typesData.find((t) => t.id === product.type)
  if (productType && !product.id.includes('/')) {
    urls.add(toSitemapPath('products', product.type, product.id))
  }
})

// Generate XML
let xml = "<?xml version='1.0' encoding='UTF-8'?>"
xml += "<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>"

// Sort URLs for consistent output
const sortedUrls = Array.from(urls).sort()

sortedUrls.forEach(urlPath => {
  const fullUrl = `${BASE_URL}${urlPath}`
  xml += `\n<url>`
  xml += `\n<loc>${escapeXml(fullUrl)}</loc>`
  xml += `\n<lastmod>${today}</lastmod>`
  xml += `\n</url>`
})

xml += '\n</urlset>'

// Write to file
const sitemapPath = path.join(projectRoot, 'public/sitemap.xml')
fs.writeFileSync(sitemapPath, xml, 'utf-8')

console.log(`Sitemap generated: ${sitemapPath}`)
console.log(`Total URLs: ${sortedUrls.length}`)
