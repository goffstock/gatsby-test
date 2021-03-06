/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'My Gatsby Site',
		description: 'Just Another Gatsby Site',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'post',
				path: `${__dirname}/content/blog`,
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			}
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: [".mdx", '.md'],
				plugins: ['gatsby-remark-images'],
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							linkImagesToOriginal: false,
							maxWidth: 1080,
							tracedSVG: {
								color: '#ff0000',
								turnPolicy: 'TURNPOLICY_MAJORITY',
							}
						}
					}
				]
			}
		},
	]
}
