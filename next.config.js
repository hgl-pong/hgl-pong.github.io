/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages部署配置
  basePath: '',
  assetPrefix: '',
  distDir: 'out'
}

module.exports = nextConfig
