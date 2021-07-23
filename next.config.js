const locales = ["es-MX", "en-US"];
const defaultLocale = "es-MX";

module.exports = {
  env: {  
    URL_HOST:process.env.HOST|| "http://localhost:8081",
    URL_SERVER: "https://api-ecommerce-prueba.herokuapp.com/",
  },
  async rewrites() {
    return [
      ...locales
        .filter((locale) => locale !== defaultLocale)
        .map((locale) => [
          { source: `/${locale}{/}?`, destination: "/" },
          { source: `/${locale}/:path*`, destination: "/:path*" },
        ])
        .reduce((acc, cur) => [...acc, ...cur], []),
    ];
  },
  async redirects() {
    return [
      {
        source: `/${defaultLocale}{/}?`,
        destination: "/",
        permanent: true,
      },
      {
        source: `/${defaultLocale}/:path*`,
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     register:true,
//     skipWaiting:true,
//   },
// })
