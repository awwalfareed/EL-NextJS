import { useState, useEffect } from "react";

// function getValues() {
// 	// const storedValues = localStorage.getItem("myData");
// 	if (!storedValues)
// 		return {
// 			username: "",
// 			email: "",
// 			password: "",
// 		};
// 	return JSON.parse(storedValues);
// }
const Usefrom = (validate, callback) => {
	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		//const { name, value } = e.target;
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(validate(values));
		setIsSubmitting(true);
	};
	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
		localStorage.setItem("myData", JSON.stringify(values));
	}, [errors, values]);
	return { handleChange, values, handleSubmit, errors };
};

export default Usefrom;
