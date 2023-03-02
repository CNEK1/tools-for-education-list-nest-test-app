/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        newNextLinkBehavior: false,
      },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.(js|ts)x?$/,
            use: ['@svgr/webpack']
        });

        return config;
    }
};

module.exports = nextConfig;
