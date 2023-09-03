import { useState, useEffect } from 'react';
import validate from '../Helpers/CustomersFormValidation';
const initialInput = {
	id: '',
	firstname: '',
	lastname: '',
	email: ''
};

const useCustomerFormInputState = (data, sendForm) => {
	const [ formState, setFormState ] = useState(data || initialInput);
	const [ errors, setErrors ] = useState({});
	const [ isSubmitting, setIsSubmitting ] = useState(false);

	useEffect(
		() => {
			if (Object.keys(errors).length === 0 && isSubmitting) {
				sendForm(formState);
			}
		},
		// eslint-disable-next-line
		[ errors ]
	);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormState({ ...formState, [name]: value });
	};

	const reset = () => {
		setFormState({ ...initialInput });
	};

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setErrors(validate(formState));
		setIsSubmitting(true);
	};

	return { formState, setFormState, handleChange, reset, errors, handleSubmit };
};

export default useCustomerFormInputState;
