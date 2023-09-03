import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';

import { ThemeProvider } from './Context/Theme/Theme.context';

import Customers from './Components/Pages/Customers/Customers';
import HomePage from './Components/Pages/Home';
import NavSideBar from './Components/Layout/NavSideBar';
import NavSideBarStyles from './Components/Layout/styles/NavSideBarStyles';
import Page404 from './Components/Pages/404';
import Templates from './Components/Pages/Templates/Templates';

const App = () => {
	const classes = NavSideBarStyles();
	return (
		<Fragment>
			<ThemeProvider>
				<NavSideBar />
				<main className={classes.content}>
					<Toolbar />

					<Switch>
						<Route exact path="/" render={() => <HomePage />} />
						<Route exact path="/customers" render={() => <Customers />} />
						<Route exact path="/templates" render={() => <Templates />} />
						<Route component={Page404} />
					</Switch>
				</main>
			</ThemeProvider>
		</Fragment>
	);
};

export default App;
