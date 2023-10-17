/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    apiUrl:'https://dummyjson.com',
  }
}

module.exports = nextConfig
// module.exports = {
//   images: {
//       domains: ['toofav.s3.ap-south-1.amazonaws.com'],
//   },
// }

