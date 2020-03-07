const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Blvkdv System',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/matheusps/wpc/blvkdv-system/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Blvkdv System',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/matheusps/wpc/blvkdv-system',
          templates:
            '/Users/matheusps/wpc/blvkdv-system/node_modules/docz-core/dist/templates',
          docz: '/Users/matheusps/wpc/blvkdv-system/.docz',
          cache: '/Users/matheusps/wpc/blvkdv-system/.docz/.cache',
          app: '/Users/matheusps/wpc/blvkdv-system/.docz/app',
          appPackageJson: '/Users/matheusps/wpc/blvkdv-system/package.json',
          gatsbyConfig: '/Users/matheusps/wpc/blvkdv-system/gatsby-config.js',
          gatsbyBrowser: '/Users/matheusps/wpc/blvkdv-system/gatsby-browser.js',
          gatsbyNode: '/Users/matheusps/wpc/blvkdv-system/gatsby-node.js',
          gatsbySSR: '/Users/matheusps/wpc/blvkdv-system/gatsby-ssr.js',
          importsJs: '/Users/matheusps/wpc/blvkdv-system/.docz/app/imports.js',
          rootJs: '/Users/matheusps/wpc/blvkdv-system/.docz/app/root.jsx',
          indexJs: '/Users/matheusps/wpc/blvkdv-system/.docz/app/index.jsx',
          indexHtml: '/Users/matheusps/wpc/blvkdv-system/.docz/app/index.html',
          db: '/Users/matheusps/wpc/blvkdv-system/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
