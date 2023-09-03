import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from './components/CustomerCard';
import useCustomerModalStyles from './styles/CustomersModal.styles';

const CustomerModalView = (props) => {
	const classes = useCustomerModalStyles();
	const { isOpen, toggle } = props;

	return (
		<Fragment>
			<Dialog open={isOpen} onClose={toggle} aria-labelledby="form-dialog-title">
				<DialogTitle className={classes.title} id="form-dialog-title">
					Customer Details
				</DialogTitle>

				<DialogContent className={classes.container}>
					<Card {...props} />
				</DialogContent>
				<DialogActions>
					<Button onClick={toggle} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default CustomerModalView;
