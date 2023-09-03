const TemplatesReducer = (state, action) => {
	const { type, payload, id } = action;
	switch (type) {
		case 'INIT':
			return {
				...state,
				templates: payload,
				loading: false
			};
		case 'CREATE':
			return {
				...state,
				templates: [ ...state.templates, payload ],
				loading: false,
				alertStatus: { show: true, msg: `${payload.name} template has been created` }
			};
		case 'DELETE':
			return {
				...state,
				templates: [ ...state.templates.filter((template) => template.id !== id) ],
				loading: false,
				alertStatus: { show: true, color: 'error', msg: `Template has been deleted` }
			};
		case 'UPDATE':
			return {
				...state,
				templates: [ ...state.templates.map((template) => (template.id === payload.id ? payload : template)) ],
				loading: false,
				alertStatus: { show: true, color: 'info', msg: `${payload.name} template has been updated` }
			};

		case 'SEARCH':
			return {
				...state,
				templates: payload,
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

export default TemplatesReducer;
