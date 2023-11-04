/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, images: { loader: "default", minimumCacheTTL: 60, domains: [ "image.tmdb.org" ], },
    basePath: process.env.BASE_PATH,
}

module.exports = nextConfig
