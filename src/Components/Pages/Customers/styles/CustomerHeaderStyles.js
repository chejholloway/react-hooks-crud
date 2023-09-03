import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../components/CustomerHeader';

const CustomerHeaderStyles = makeStyles(() => ({
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
export default CustomerHeaderStyles;
