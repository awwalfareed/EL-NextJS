import styles from "../styles/FormSignup.module.css";
import useForm from "./UseFrom";
import validate from "./ValidateData";
import BoltIcon from "@mui/icons-material/Bolt";
import Link from "next/link";

const FormSignup = ({ submitForm }) => {
	const { handleChange, values, handleSubmit, errors } = useForm(
		validate,
		submitForm
	);
	return (
		<div className={styles.formContentRight}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<BoltIcon fontSize="large" className={styles.boltIcon} />
				<h1>Sign Up</h1>
				<h5>Get start with us today! Create your account by filling out</h5>
				<button className={styles.formInputGoogleBtn} type="submit">
					Sign up with Google
				</button>

				<div className={styles.divContainer}>
					<span className={styles.signupEmail}> or Sign up with Email</span>
				</div>

				<div className={styles.formInputs}>
					<label htmlFor="username" className={styles.formLabel}>
						Username
					</label>
					<input
						id="username"
						type="text"
						className={styles.formInput}
						name="username"
						placeholder="Enter your name"
						value={values.username}
						onChange={handleChange}
					/>
					{errors.username && <p>{errors.username}</p>}
				</div>
				<div className={styles.formInputs}>
					<label htmlFor="email" className={styles.formLabel}>
						Email
					</label>
					<input
						id="email"
						type="email"
						className={styles.formInput}
						name="email"
						placeholder="Enter your password"
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className={styles.formInputs}>
					<label htmlFor="email" className={styles.formLabel}>
						Password
					</label>
					<input
						id="password"
						type="password"
						className={styles.formInput}
						name="password"
						placeholder="Enter your password"
						value={values.password}
						onChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<div className={styles.checkbox}>
					<input type="checkbox" />
					<label>I agree to the Terms & Conditions</label>
				</div>
				<button className={styles.formInputBtn} type="submit">
					Sign up
				</button>
				<span className={styles.formInputLogin}>
					Already have an Account?<Link href="/login"> Sign in</Link>
				</span>
			</form>
		</div>
	);
};

export default FormSignup;
