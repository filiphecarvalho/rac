/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  future: {
    v2_dev: true,
    v2_meta: true
  },
  ignoredRouteFiles: ['**/.*'],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  publicPath: "/build/",
  serverBuildDirectory: 'build',
  serverModuleFormat: 'cjs',

  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/", "routes/_index.tsx", { index: true });
    });
  },
  watchPaths: () => require('@nx/remix').createWatchPaths(__dirname),
};
