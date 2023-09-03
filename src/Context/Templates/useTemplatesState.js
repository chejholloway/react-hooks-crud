import { useEffect, useReducer } from 'react';
import axios from 'axios';
import TemplatesReducer from './Templates.reducer';

const initialsValues = {
	templates: [],
	loading: false,
	alertStatus: { show: false }
};

const useTemplateDataState = () => {
	const [ data, dispatch ] = useReducer(TemplatesReducer, initialsValues);

	useEffect(() => {
		setLoading();
		const getData = async () => {
			const url = process.env.REACT_APP_TEMPLATES_URL;
			const options = {
				method: 'GET',
				headers: { 'Content-Type': 'application/json; charset=utf-8' }
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

	const createTemplate = async (newTemplateData) => {
		setLoading();

		const url = process.env.REACT_APP_TEMPLATES_URL;
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			data: { ...newTemplateData }
		};

		try {
			const res = await axios(url, options);
			dispatch({ type: 'CREATE', payload: res.data });
			setTimeout(() => dispatch({ type: 'CLOSE_ALERT' }), 2500);
		} catch (err) {
			alert(err);
		}
	};

	const updateTemplate = async (newTemplateData) => {
		const url = process.env.REACT_APP_TEMPLATES_URL + '/' + newTemplateData.id;
		const options = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			data: { ...newTemplateData }
		};

		try {
			const res = await axios(url, options);
			dispatch({ type: 'UPDATE', payload: res.data });
			setTimeout(() => dispatch({ type: 'CLOSE_ALERT', color: 'info' }), 2500);
		} catch (err) {
			alert(err);
		}
	};

	const deleteTemplate = async (id) => {
		const url = `${process.env.REACT_APP_TEMPLATES_URL}/${id}`;
		const options = {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json; charset=utf-8' }
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

	const searchTemplates = async (searchTerm) => {
		const url = `${process.env.REACT_APP_TEMPLATES_URL}?q=${searchTerm}`;
		const options = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json; charset=utf-8' }
		};

		try {
			const res = await axios(url, options);
			dispatch({ type: 'SEARCH', payload: res.data });
		} catch (err) {
			alert(err);
		}
	};

	const setLoading = () => dispatch({ type: 'SET_LOADING' });

	return [ data, dispatch, createTemplate, updateTemplate, deleteTemplate, searchTemplates ];
};

export default useTemplateDataState;
