import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../NavSideBar';

const NavSideBarStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	drawer: {
		width: drawerWidth
	},
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3)
	},
	navLink: {
		color: 'inherit',
		textDecoration: 'none'
	},
	active: {
		'& > div': {
			backgroundColor: 'rgba(0, 0, 0, .04)'
		}
	}
}));
export default NavSideBarStyles;
