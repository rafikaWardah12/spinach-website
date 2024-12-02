/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "images.unsplash.com",
          "assets.promediateknologi.id",
          "awsimages.detik.net.id",
          "cdn.pixabay.com",
          "ggm-api.gatenzteam.com",
        ],
        unoptimized: true, // Add this line for Netlify compatibility
      },
}

module.exports = nextConfig
