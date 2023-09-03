import React, { Fragment, useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import CustomerCardStyles from '../styles/CustomerCardStyles';

import { CustomersDispatchContext } from '../../../../Context/Customers/Customers.context';

export default function ViewCard(props) {
	const classes = CustomerCardStyles();

	const { deleteCustomer } = useContext(CustomersDispatchContext);
	const { isOpen, data, toggle, toggleEditForm } = props;
	const { id, email, firstname, lastname, last_order } = data;

	const handleDelete = (id) => {
		isOpen && toggle();
		deleteCustomer(id);
	};

	const handleEdit = (data) => {
		toggle();
		toggleEditForm(data);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				action={
					<Fragment>
						{isOpen && (
							<IconButton aria-label="edit" onClick={() => handleEdit(data)}>
								<EditIcon />
							</IconButton>
						)}

						<IconButton aria-label="delete" onClick={() => handleDelete(id)}>
							<DeleteForeverIcon />
						</IconButton>
					</Fragment>
				}
				title={firstname + ' ' + lastname}
				subtitle={email}
			/>

			<CardContent>
				<Typography variant="body2" color="textPrimary" component="p">
					{last_order && (
						<span>
							{last_order.id}, {last_order.timestamp}
						</span>
					)}
				</Typography>
			</CardContent>
		</Card>
	);
}
