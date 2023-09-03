import { makeStyles } from '@material-ui/core/styles';
const useCustomerListStyles = makeStyles({
	padLeft: { paddingLeft: '11rem' },
	table: {
		minWidth: 650
	},
	tableHeaderDark: {
		backgroundColor: 'rgba(45, 52, 54, 1) ',
		'& > th': {
			color: 'white',
			fontSize: 16,
			fontWeight: 500
		}
	},
	tableHeaderLight: {
		backgroundColor: 'rgba(250, 250, 250, 1)',
		'& > th': {
			color: 'rgba(45, 52, 54, .85)',
			fontSize: 16,
			fontWeight: 500
		}
	},

	iconBtn: {
		cursor: 'pointer',
		color: 'rgba(45, 52, 54, .85)',
		'&:hover': {
			color: 'rgba(45, 52, 54, 1)'
		}
	}
});

export default useCustomerListStyles;
