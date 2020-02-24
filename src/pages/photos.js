import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo'

const Photos = () => {
	const data = useStaticQuery(graphql`
		query Images {
			images: allFile(filter: { relativeDirectory: {eq: "gallery"} }) {
				nodes {
					id
					childImageSharp {
						fixed(
							width: 400, height: 400
						) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
			image: file(relativePath: {eq: "photo-1.jpg"}) {
				id
				childImageSharp {
					fixed(
						width: 400
						duotone: { highlight: "#ffffff", shadow: "#000000" }
					) {
						...GatsbyImageSharpFixed
					}
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
		console.log(data);
	return (
		<Layout>
		<SEO title="Working With Gatsby Image" />
			<h1>Working With Gatsby Image</h1>
			<Img fixed={data.image.childImageSharp.fixed} alt="" />
			<Img fluid={data.image.childImageSharp.fluid} alt="" />

			<div className="gallery">
				{data.images.nodes.map(image => (
					<Img key={image.id} fixed={image.childImageSharp.fixed} alt="" />
				))}
			</div>
		</Layout>
	)
}

export default Photos;