/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig

// Do thumbnailUrl: "https://res.cloudinary.com/kimwy/image/upload/v1648712410/learn-nextjs/item1_cbidwn.jpg",
// nên phải config lại
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};
