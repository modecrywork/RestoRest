const path = require("path");

module.exports = {
  resolve: {
    alias: {
      graphQL: path.resolve(__dirname, "./client/graphql"),
      services: path.resolve(__dirname, "./client/graphql"),
      enhancers: path.resolve(__dirname, "./client/enhancers"),
      constants: path.resolve(__dirname, "./client/constants"),
      utils: path.resolve(__dirname, "./client/core/utils"),
      theme: path.resolve(__dirname, "./client/core/theme"),
      core: path.resolve(__dirname, "./client/core"),
      components: path.resolve(__dirname, "./client/components")
    }
  }
};
