import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "matsmall.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.salla.sa",
        pathname: "/**",
      },
      
      {
        protocol: "https",
        hostname: "v-genius.fatafeat.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.salla.sa",
        pathname: "/XaeeA/**",
      },
      {
        protocol: "https",
        hostname: "emkan-furniture.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/images?q=tbn:ANd9Gc**",
      },

      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "beyooot.com",
        pathname: "/cdn/shop/files/**",
      },
      {
        protocol: "https",
        hostname: "www.zrafh.com",
        pathname: "/cdn/shop/products/**",
      },
      {
        protocol: "https",
        hostname: "emkan-furniture.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn.salla.sa",   
        pathname: "/OZAme/**",
      },
    
    ],
  },
};

export default nextConfig;
