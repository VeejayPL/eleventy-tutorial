// 11ty configuration
module.exports = (config) => {
  config.addPassthroughCopy("./src/css/");
  config.addPassthroughCopy("./src/scripts/");
  config.addWatchTarget("./src/css/");
  config.addWatchTarget("./src/scripts/");
  config.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
