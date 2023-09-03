import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import TemplateModalForm from '../../../Forms/TemplateModalForm';
import useModal from '../../../../Hooks/useModal';
import { ThemeContext } from '../../../../Context/Theme/Theme.context';
import CustomerHeaderStyles from '../styles/CustomerHeaderStyles';

export const drawerWidth = 210;

const CustomerHeader = (props) => {
	const { isDarkMode } = useContext(ThemeContext);
	const { isOpen, toggle } = useModal();

	const classes = CustomerHeaderStyles(isDarkMode);
	const { title, isBtnHidden, search } = props;

	return (
		<AppBar position="fixed" className={`${classes.appBar} ${isDarkMode ? classes.appBarDark : null}`}>
			<Toolbar className={classes.toolbar}>
				<Typography className={classes.title} variant="h6" noWrap>
					{title}
				</Typography>
				{search}
				{!isBtnHidden && (
					<Fab variant="extended" size="medium" onClick={toggle}>
						<PersonAddIcon />
						Add New Customer
					</Fab>
				)}
				{isOpen ? <TemplateModalForm isOpen={isOpen} toggle={toggle} /> : null}
			</Toolbar>
		</AppBar>
	);
};

export default CustomerHeader;
