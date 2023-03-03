// 11ty configuration
module.exports = (config) => {
  config.addPassthroughCopy("./src/css/");
  config.addWatchTarget("./src/css/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
