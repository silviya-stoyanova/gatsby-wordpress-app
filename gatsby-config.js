module.exports = {
  pathPrefix: `/gatsby-wordpress-app`,

  siteMetadata: {
    title: `Gatsby Default Starter`,
    subtitle: `Fetch Data From WordPress`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {

        // baseUrl: "wpdemo.gatsbycentral.com", 
        baseUrl: "demo.wp-api.org", 
        protocol: "https",

        hostingWPCOM: false,
        useACF: true,
        // useACF: false,

        acfOptionPageIds: [],
        // auth: {
        //   htaccess_user: "your-htaccess-username",
        //   htaccess_pass: "your-htaccess-password",
        //   htaccess_sendImmediately: false,

        //   wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
        //   wpcom_app_clientId: "54793",
        //   wpcom_user: "gatsbyjswpexample@gmail.com",
        //   wpcom_pass: process.env.WORDPRESS_PASSWORD,

        //   jwt_user: process.env.JWT_USER,
        //   jwt_pass: process.env.JWT_PASSWORD,
        //   jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        // },
        cookies: {},
        // verboseOutput: false,
        verboseOutput: true,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://source-url.com",
          replacementUrl: "https://replacement-url.com",
        },
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: ["**/posts/1456"],
        keepMediaSizes: false,
        normalizer: function ({ entities }) {
          return entities
        },
        normalizers: normalizers => [
          ...normalizers,
          {
            name: "nameOfTheFunction",
            normalizer: function ({ entities }) {
              return entities
            },
          },
        ],
      },
    },
  ],
}
