module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("plugins");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("blog/index.html");
    eleventyConfig.addPassthroughCopy("favicon.ico");

	eleventyConfig.addCollection("groups", function(collectionApi) {
		let groups = new Set();
		let posts = collectionApi.getFilteredByTag('home');
		posts.forEach(p => {
			let grps = p.data.groups;
			grps.forEach(g => groups.add(g));
		});
		return Array.from(groups);
	});
}
