// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---readme-md": () => import("./../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-design-system-components-unstable-spinner-unstable-spinner-mdx": () => import("./../../src/design-system/components/UnstableSpinner/UnstableSpinner.mdx" /* webpackChunkName: "component---src-design-system-components-unstable-spinner-unstable-spinner-mdx" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

