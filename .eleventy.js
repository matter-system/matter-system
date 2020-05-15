module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(["njk", "html", "md", "css"]);
  eleventyConfig.addPassthroughCopy("../images/navigation/*.svg");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
