module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(["njk", "html", "css"]);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
