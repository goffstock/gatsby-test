import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo'
import gatsbyAstronaut from '../images/gatsby-astronaut.png';

export default () => (
	<Layout>
		<SEO title="Welcome To My Site" />
		<h1>Hello World!</h1>
		<img className="hero" src={gatsbyAstronaut} alt="A Gatsby Astronaut" />
		<p>Read More <Link to={"/about"}>About Me</Link></p>
	</Layout>
)