import { makeStyles } from '@material-ui/core/styles';

const useCustomerModalStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	title: {
		color: 'white',
		backgroundColor: 'rgba(45, 52, 54, 1)'
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		'justify-content': 'space-between'
	}
}));
export default useCustomerModalStyles;
