// 11ty configuration
module.exports = (config) => {
  config.addPassthroughCopy("./src/css/");
  config.addPassthroughCopy("./src/scripts/");
  config.addWatchTarget("./src/css/");
  config.addWatchTarget("./src/scripts/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
