const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Neptune Mutual`,
    description: `Neptune Mutual provides you with guaranteed stablecoin liquidity to reduce your risk exposure by hedging against possible capital risks and smart contract vulnerabilities.`,
    author: `@neptunemutual`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, './src/images')
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png` // This path is relative to the root of the site.
      }
    }
    // {
    //   resolve: `gatsby-plugin-scroll-reveal`,
    //   options: {
    //     threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
    //     once: false, // Defines if animation needs to be launched once
    //     disable: false, // Flag for disabling animations

    //     // Advanced Options
    //     selector: '[data-sal]', // Selector of the elements to be animated
    //     animateClassName: 'sal-animate', // Class name which triggers animation
    //     disabledClassName: 'sal-disabled', // Class name which defines the disabled state
    //     rootMargin: '0% 50%', // Corresponds to root's bounding box margin
    //     enterEventName: 'sal:in', // Enter event name
    //     exitEventName: 'sal:out' // Exit event name
    //   }
    // }
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
