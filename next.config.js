const merge = require("webpack-merge");

const cfg = require("./webpack.config");

const exportPathMap = ()=> {
  return {
    "/": { page: "/" },
    "/auth": { page: "/auth" }
  };
};

module.exports = {
  exportPathMap,
  webpack: (config, options) => {
    return merge(config, cfg);
  }
};
