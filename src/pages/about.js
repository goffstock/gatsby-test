import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo'

export default () => (
	<Layout>
		<SEO title="About" />
		<h1>About Me</h1>
		<p>Back to <Link to={"/"}>Home</Link></p>
	</Layout>
)