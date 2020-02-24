import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo'

export default () => (
	<Layout>
		<SEO title="404" />
		<h1>404!</h1>
		<p>Page not found. Back to <Link to={"/"}>Home</Link></p>
	</Layout>
)