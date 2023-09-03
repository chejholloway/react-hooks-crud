import React from 'react';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NavSideBarStyles from './styles/NavSideBarStyles';
import PeopleIcon from '@material-ui/icons/People';
import SubjectIcon from '@material-ui/icons/Subject';
import Toolbar from '@material-ui/core/Toolbar';

import { Typography } from '@material-ui/core';

export const drawerWidth = 210;

const NavSideBar = () => {
	const classes = NavSideBarStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />

			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<Toolbar>
					<NavLink to="/" className={classes.navLink} activeClassName={classes.active}>
						<Typography variant="h6" align="center">
							SD App
						</Typography>
					</NavLink>
				</Toolbar>

				<div className={classes.drawerContainer}>
					<List>
						<NavLink to="/customers" className={classes.navLink} activeClassName={classes.active}>
							<ListItem button>
								<ListItemIcon>
									<PeopleIcon />
								</ListItemIcon>

								<ListItemText primary="Customers" />
							</ListItem>
						</NavLink>
						<NavLink to="/templates" className={classes.navLink} activeClassName={classes.active}>
							<ListItem button>
								<ListItemIcon>
									<SubjectIcon />
								</ListItemIcon>

								<ListItemText primary="Templates" />
							</ListItem>
						</NavLink>
					</List>
				</div>
			</Drawer>
		</div>
	);
};

export default NavSideBar;
