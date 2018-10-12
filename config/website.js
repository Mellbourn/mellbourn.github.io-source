const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Capenta - front-end and full-stack development consultants', // Navigation and Site Title
  siteTitleAlt: 'Capenta', // Alternative Site title for SEO
  siteUrl: 'https://capenta.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription:
    'Capenta AB - software development consultants focusing on front-end development with the latest technologies',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@mellbourn', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
