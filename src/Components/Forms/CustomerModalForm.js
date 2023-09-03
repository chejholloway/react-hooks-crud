import React, { useContext, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import DialogTitle from '@material-ui/core/DialogTitle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { CustomersDispatchContext } from '../../Context/Customers/Customers.context';
import useCustomerFormInput from '../../Hooks/useCustomerFormInput';
import useCustomerModalStyles from './styles/useCustomerModalStyles';

const CustomerModalForm = (props) => {
	const classes = useCustomerModalStyles();
	const { isEditing, isOpen, toggle, data, title = 'Create Customer' } = props;

	const { formState, handleChange, getRandomCustomer, reset, errors, handleSubmit } = useCustomerFormInput(
		data,
		sendForm
	);
	const { email, firstname, id, lastname } = formState;

	const { createCustomer, updateCustomer, deleteCustomer } = useContext(CustomersDispatchContext);

	function sendForm(newData) {
		if (isEditing) {
			updateCustomer(newData);
			reset();
			toggle();
		} else {
			createCustomer(newData);
			reset();
		}
	}

	return (
		<Fragment>
			<Dialog open={isOpen} onClose={toggle} aria-labelledby="form-dialog-title">
				{isEditing ? (
					<Fragment>
						<DialogTitle className={classes.title} id="form-dialog-title">
							Update Customer
						</DialogTitle>

						<Button
							size="small"
							onClick={() => {
								toggle();
								deleteCustomer(id);
							}}
							startIcon={<DeleteForeverIcon />}
						>
							Click here to delete this Customer
						</Button>
					</Fragment>
				) : (
					<Fragment>
						<DialogTitle className={classes.title} id="form-dialog-title">
							{title}
						</DialogTitle>
						<Button size="small" onClick={getRandomCustomer} startIcon={<PersonAddIcon />}>
							Generate a new Random Customer (demo only)
						</Button>
					</Fragment>
				)}

				<Divider />

				<DialogContent className={classes.container}>
					<TextField
						required
						className={classes.itemSmall}
						autoFocus
						margin="dense"
						variant="outlined"
						name="firstname"
						label="First Name"
						type="text"
						value={firstname}
						onChange={handleChange}
						helperText={errors.firstname}
						error={Boolean(errors.firstname)}
					/>

					<TextField
						required
						className={classes.itemSmall}
						margin="dense"
						variant="outlined"
						name="lastname"
						label="Last Name"
						type="text"
						value={lastname}
						onChange={handleChange}
						helperText={errors.lastname}
						error={Boolean(errors.lastname)}
					/>

					<TextField
						required
						className={classes.itemSmall}
						margin="dense"
						variant="outlined"
						name="email"
						label="Email"
						type="email"
						value={email}
						onChange={handleChange}
						helperText={errors.email}
						error={Boolean(errors.email)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggle} color="primary">
						Cancel
					</Button>
					<Button onClick={handleSubmit} color="primary">
						Validate
					</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default CustomerModalForm;
