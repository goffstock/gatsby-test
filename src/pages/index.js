import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo'
import gatsbyAstronaut from '../images/gatsby-astronaut.png';

export default () => (
	<Layout>
		<SEO title="Welcome To My Site" />
		<h1>Gatsby Test Site</h1>
		<p><Link to="https://priceless-feynman-b41ceb.netlify.com/about">https://priceless-feynman-b41ceb.netlify.com/about</Link></p>
		<img className="hero" src={gatsbyAstronaut} alt="A Gatsby Astronaut" />
		<p>Read More <Link to={"/about"}>About Me</Link></p>
	</Layout>
)