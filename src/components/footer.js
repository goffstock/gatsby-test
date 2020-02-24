import React from 'react';
import useSiteMetadata from '../hooks/user-sitemetadata';

const Footer = () => {
	const { title, description } = useSiteMetadata();
	return (
		<footer>
			<hr />
			<p>{title} - {description}</p>
		</footer>
	)
}

export default Footer;