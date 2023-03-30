module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("src/assets");
    eleventyConfig.addPassthroughCopy("src/assets");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}