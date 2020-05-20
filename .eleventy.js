const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(["njk", "html", "md", "css"]);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
