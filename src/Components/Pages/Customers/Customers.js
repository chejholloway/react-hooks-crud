import React, { Fragment } from 'react';
import CustomerHeader from './components/CustomerHeader';
import CustomersList from './CustomersList';
import Search from './SearchCustomers';
import { CustomersProvider } from '../../../Context/Customers/Customers.context';

const Customers = () => {
	return (
		<Fragment>
			<CustomersProvider>
				<CustomerHeader title="Customers Listing" search={<Search />} />
				<CustomersList />
			</CustomersProvider>
		</Fragment>
	);
};

export default Customers;
