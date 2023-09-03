import { useEffect, useReducer } from 'react';
import axios from 'axios';
import CustomersReducer from './Customers.reducer';

const initialsValues = {
	customers: [],
	loading: false,
	alertStatus: { show: false }
};

const useCustomerDataState = () => {
	const [ data, dispatch ] = useReducer(CustomersReducer, initialsValues);

	useEffect(() => {
		setLoading();
		const getData = async () => {
			const url = process.env.REACT_APP_CUSTOMERS_URL;
			const options = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				}
			};

			try {
				const res = await axios(url, options);
				dispatch({ type: 'INIT', payload: res.data });
			} catch (err) {
				alert(err);
			}
		};
		getData();
	}, []);

	const createCustomer = async (newCustomerData) => {
		setLoading();
		newCustomerData.code =
			newCustomerData.first_name.slice(0, 3).toUpperCase() + newCustomerData.last_name.slice(0, 3).toUpperCase();

		const url = process.env.REACT_APP_CUSTOMERS_URL;
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			data: { ...newCustomerData }
		};

		try {
			const res = await axios(url, options);
			dispatch({ type: 'CREATE', payload: res.data });
			setTimeout(() => dispatch({ type: 'CLOSE_ALERT' }), 2500);
		} catch (err) {
			alert(err);
		}
	};

	const updateCustomer = async (newCustomerData) => {
		const url = `${process.env.REACT_APP_CUSTOMERS_URL}/${newCustomerData.id}`;
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			data: { ...newCustomerData }
		};

		try {
			const res = await axios(url, options);
			dispatch({ type: 'UPDATE', payload: res.data });
			setTimeout(() => dispatch({ type: 'CLOSE_ALERT', color: 'info' }), 2500);
		} catch (err) {
			alert(err);
		}
	};

	const deleteCustomer = async (id) => {
		const url = `${process.env.REACT_APP_CUSTOMERS_URL}/${id}`;
		const options = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			}
		};

		try {
			const res = await axios(url, options);
			if (res.status === 200) {
				dispatch({ type: 'DELETE', id });
				setTimeout(() => dispatch({ type: 'CLOSE_ALERT', color: 'error' }), 3000);
			}
		} catch (err) {
			alert(err);
		}
	};

	const searchCustomers = async (searchTerm) => {
		const url = `${process.env.REACT_APP_CUSTOMERS_URL}?q=${searchTerm}`;
		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			}
		};

		try {
			const res = await axios(url, options);
			dispatch({ type: 'SEARCH', payload: res.data });
		} catch (err) {
			alert(err);
		}
	};

	const setLoading = () => dispatch({ type: 'SET_LOADING' });

	return [ data, dispatch, createCustomer, updateCustomer, deleteCustomer, searchCustomers ];
};

export default useCustomerDataState;
