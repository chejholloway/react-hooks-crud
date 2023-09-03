import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import CustomerModalForm from '../../Forms/CustomerModalForm';
import CustomerModalView from './CustomerModalView';

import { CustomersStateContext, CustomersDispatchContext } from '../../../Context/Customers/Customers.context';
import { ThemeContext } from '../../../Context/Theme/Theme.context';

import useModal from '../../../Hooks/useModal';

import LoadingBar from '../../LoadingBar';
import AlertStatusBar from '../../AlertStatusBar';
import useCustomerListStyles from './styles/useCustomerListStyles';

const CustomersList = () => {
	const { isDarkMode } = useContext(ThemeContext);
	const { customers, loading, alertStatus } = useContext(CustomersStateContext);
	const classes = useCustomerListStyles();

	const { dispatch, deleteCustomer } = useContext(CustomersDispatchContext);
	const { isOpen, toggle, toggleWithData, data } = useModal();
	const { isOpen: isViewOpen, toggle: toggleView, toggleWithData: toggleViewWithData, data: viewData } = useModal();

	return (
		<React.Fragment>
			<TableContainer component={Paper} className={classes.padLeft}>
				<Table className={classes.table} size="small" aria-label="a table">
					<TableHead>
						<TableRow className={isDarkMode ? classes.tableHeaderDark : classes.tableHeaderLight}>
							<TableCell>Name</TableCell>
							<TableCell>Email</TableCell>
							<TableCell align="center">Actions</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{customers &&
							customers.map((customer) => (
								<TableRow key={customer.id}>
									<TableCell>{`${customer.firstname} ${customer.lastname}`}</TableCell>
									<TableCell>{customer.email}</TableCell>
									<TableCell align="center">
										<VisibilityIcon
											className={classes.iconBtn}
											onClick={() => toggleViewWithData(customer)}
										/>
										<EditIcon
											className={classes.iconBtn}
											onClick={() => toggleWithData(customer)}
										/>
										<DeleteForeverIcon
											className={classes.iconBtn}
											onClick={() => deleteCustomer(customer.id)}
										/>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>

				{isOpen ? <CustomerModalForm isEditing isOpen={isOpen} toggle={toggle} data={data} /> : null}

				{isViewOpen ? (
					<CustomerModalView
						isOpen={isViewOpen}
						toggle={toggleView}
						toggleEditForm={toggleWithData}
						data={viewData}
					/>
				) : null}
			</TableContainer>

			{loading && (
				<Toolbar>
					<LoadingBar />
				</Toolbar>
			)}

			<Toolbar>
				<AlertStatusBar {...alertStatus} handleAlert={() => dispatch({ type: 'CLOSE_ALERT' })} />
			</Toolbar>
		</React.Fragment>
	);
};

export default CustomersList;
