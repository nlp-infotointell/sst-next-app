module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home/ar",
        destination: "/ar",
        permanent: true,
      },
      {
        source: "/index-Ar.html",
        destination: "/ar",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/terms-conditions.html",
        destination: "/terms-conditions",
        permanent: true,
      },
      {
        source: "/terms-conditions-Ar.html",
        destination: "/terms-conditions/ar",
        permanent: true,
      },
      {
        source: "/cancelation.html",
        destination: "/cancelation-terms",
        permanent: true,
      },
      {
        source: "/chatbot.html",
        destination: "/chatbot",
        permanent: true,
      },
      {
        source: "/privacy-policy.html",
        destination: "/privacy-policy",
        permanent: true,
      }
    ];
  },
  // i18n: {
  //   // These are all the locales you want to support in
  //   // your application
  //   locales: ["en-US"],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: "en-US",
  //   // This is a list of locale domains and the default locale they
  //   // should handle (these are only required when setting up domain routing)
  //   // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  //   domains: [
  //     {
  //       domain: "infotointell.com",
  //       defaultLocale: "en-US",
  //     },
  //   ],
  // },

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["infotointell.fra1.digitaloceanspaces.com"],
  },
};
