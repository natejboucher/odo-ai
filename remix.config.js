// remix.config.js (CommonJS)
/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  tailwind: true,
  serverModuleFormat: "cjs",
  devServerPort: 3000,
  serverPort: 3000,
};
