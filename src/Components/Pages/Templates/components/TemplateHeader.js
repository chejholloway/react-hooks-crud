import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import TemplateModalForm from '../../../Forms/TemplateModalForm';
import useModal from '../../../../Hooks/useModal';
import { ThemeContext } from '../../../../Context/Theme/Theme.context';

const drawerWidth = 210;

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex'
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		backgroundColor: 'rgba(250, 250, 250, 1)',
		color: 'rgba(45, 52, 54, 1)'
	},
	appBarDark: {
		backgroundColor: 'rgba(45, 52, 54, 1)',
		color: 'white'
	},
	toolbar: {
		justifyContent: 'space-between'
	},

	title: {
		height: '35px'
	}
}));

const TemplateHeader = (props) => {
	const { isDarkMode } = useContext(ThemeContext);
	const { isOpen, toggle } = useModal();

	const classes = useStyles(isDarkMode);
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
						<PlaylistAddIcon />
						Create Template
					</Fab>
				)}
				{isOpen ? <TemplateModalForm isOpen={isOpen} toggle={toggle} /> : null}
			</Toolbar>
		</AppBar>
	);
};

export default TemplateHeader;
