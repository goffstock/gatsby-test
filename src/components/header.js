import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const Header = () => (
	<StaticQuery 
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
					description
					title
					}
				}
			}
		`}
		render={data => (
			<header>
				<h1><Link to={'/'}>{data.site.siteMetadata.title}</Link></h1>
				<p>{data.site.siteMetadata.description}</p>
				<nav>
					<ul>
						<li><Link to={'/'} activeClassName="active">Home</Link></li>
						<li><Link to={'/about'} activeClassName="active">About</Link></li>
						<li><Link to={'/blog'} activeClassName="active" partiallyActive={true}>Blog</Link></li>
						<li><Link to={'/photos'} activeClassName="active" partiallyActive={true}>Photos</Link></li>

					</ul>
				</nav>
			</header>
		)}
	/>
)

export default Header;