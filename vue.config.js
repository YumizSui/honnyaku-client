module.exports = {
  publicPath: "/honnyaku-server",
  devServer: {
    proxy: {
      "^/honnyaku-server/api": {
        target: "https://yumizsui.trap.show/honnyaku-server/"
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
