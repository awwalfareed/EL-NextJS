import React, { useState } from "react";
import styles from "../styles/FormSignup.module.css";
import FormSignin from "./FormSignin";
import FormSuccess from "./FormSuccess";

const Login = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className={styles.formContainer}>
				{!isSubmitted ? (
					<FormSignin submitForm={submitForm} />
				) : (
					<FormSuccess />
				)}
				<div className={styles.formContenT}></div>
			</div>
		</>
	);
};

export default Login;
