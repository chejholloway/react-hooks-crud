import { useState, useEffect } from 'react';
import validate from '../Helpers/TemplateFormValidation';
const initialInput = {
	id: '',
	name: '',
	content: ''
};

const useTemplateFormInputState = (data, sendForm) => {
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

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setErrors(validate(formState));
		setIsSubmitting(true);
	};

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormState({ ...formState, [name]: value });
	};

	const reset = () => {
		setFormState({ ...initialInput });
	};

	return { formState, setFormState, handleChange, reset, errors, handleSubmit };
};

export default useTemplateFormInputState;
