import React, { createContext } from 'react';
import useCustomersState from './useCustomersState';

export const CustomersStateContext = createContext();
export const CustomersDispatchContext = createContext();

export const CustomersProvider = (props) => {
	const [ data, dispatch, createCustomer, updateCustomer, deleteCustomer, searchCustomers ] = useCustomersState();

	return (
		<CustomersStateContext.Provider value={data}>
			<CustomersDispatchContext.Provider
				value={{ dispatch, createCustomer, updateCustomer, deleteCustomer, searchCustomers }}
			>
				{props.children}
			</CustomersDispatchContext.Provider>
		</CustomersStateContext.Provider>
	);
};
