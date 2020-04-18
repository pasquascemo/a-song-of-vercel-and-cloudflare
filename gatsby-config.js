module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      options: {
        icon: 'src/images/gatsby-icon.png',
        name: 'A Song of ZEIT and Cloudflare',
        short_name: 'A Song of ZEIT and Cloudflare',
        start_url: '/',
      },
      resolve: `gatsby-plugin-manifest`,
    },
  ],
  siteMetadata: {
    title: 'A Song of ZEIT and Cloudflare',
  }
};
