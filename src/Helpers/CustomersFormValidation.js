export default function validate(values) {
	let errors = {};
	if (!values.firstname) {
		errors.firstname = 'First Name is required';
	} else if (!/^[a-z,é,è,ë ,.'-]+$/i.test(values.first_name)) {
		errors.firstname = 'First Name is invalid';
	}

	if (!values.lastname) {
		errors.last_name = 'Last Name is required';
	} else if (!/^[a-z ,.'-]+$/i.test(values.last_name)) {
		errors.last_name = 'Last Name is invalid';
	}

	if (!values.email) {
		errors.email = 'Email address is required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}

	return errors;
}
