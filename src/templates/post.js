import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SEO from '../components/seo'

export const query = graphql`
	query($slug: String!) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				title
			}
			body
		}
	}
`

const PostTemplate = ({
	data: {
		mdx: {
			frontmatter: { title },
			body: content,
		}
	}
}) => (
	<Layout>
		<SEO title={`${title} | Blog`} />
		<p>
			<Link to={'/blog/'}>&lt; Back to all posts</Link>
		</p>
		<h1>{title}</h1>
		<MDXRenderer>{content}</MDXRenderer>
	</Layout>
)

export default PostTemplate;