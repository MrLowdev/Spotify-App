/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ytnisljunwjgfnpkorbw.supabase.co",
        // pathname: "*",
      },
    ],
  },
};

export default nextConfig;
