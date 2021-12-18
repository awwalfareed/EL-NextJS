import React, { useState } from "react";
import styles from "../styles/FormSignup.module.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import Link from "next/link";

const Register = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className={styles.formContainer}>
				{!isSubmitted ? (
					<FormSignup submitForm={submitForm} />
				) : (
					<FormSuccess />
				)}

				<div className={styles.formContenT}></div>
			</div>
		</>
	);
};

export default Register;
