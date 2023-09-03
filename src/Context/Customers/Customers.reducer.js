const CustomersReducer = (state, action) => {
	const { type, payload, id } = action;
	switch (type) {
		case 'INIT':
			return {
				...state,
				customers: payload,
				loading: false
			};
		case 'CREATE':
			return {
				...state,
				customers: [ ...state.customers, payload ],
				loading: false,
				alertStatus: { show: true, msg: `${payload.first_name} has been created as new customer` }
			};
		case 'DELETE':
			return {
				...state,
				customers: [ ...state.customers.filter((customer) => customer.id !== id) ],
				loading: false,
				alertStatus: { show: true, color: 'error', msg: `Customer has been deleted` }
			};
		case 'UPDATE':
			return {
				...state,
				customers: [ ...state.customers.map((customer) => (customer.id === payload.id ? payload : customer)) ],
				loading: false,
				alertStatus: {
					show: true,
					color: 'info',
					msg: `${payload.firstname} ${payload.lastname} has been updated`
				}
			};

		case 'SEARCH':
			return {
				...state,
				customers: payload,
				loading: false
			};
		case 'SET_LOADING':
			return {
				...state,
				loading: true
			};
		case 'CLOSE_ALERT':
			return {
				...state,
				alertStatus: { show: false, color: action.color }
			};

		default:
			return state;
	}
};

export default CustomersReducer;
