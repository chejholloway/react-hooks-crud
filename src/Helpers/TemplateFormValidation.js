export default function validate(values) {
	let errors = {};
	if (!values.name) {
		errors.name = 'First Name is required';
	} else if (!/^[a-z,é,è,ë ,.'-]+$/i.test(values.name)) {
		errors.name = 'First Name is invalid';
	}

	if (!values.content) {
		errors.content = 'content is required';
	} else if (!/^[\s\S]+$/i.test(values.content)) {
		errors.content = 'content is invalid';
	}

	return errors;
}
