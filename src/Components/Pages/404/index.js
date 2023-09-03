import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Page404 = ({ location }) => (
	<Fragment id="">
		<div style={{ paddingLeft: '20rem' }}>
			<Fragment className="">
				<h1 className="">404</h1>
				<h2 className="">Page not found</h2>
				<h3>
					No match found for <code>{location.pathname}</code>
				</h3>
			</Fragment>
			<NavLink to="/" className="" activeClassName="">
				Homepage
			</NavLink>
		</div>
	</Fragment>
);
export default Page404;
