import styles from "../styles/FormSignin.module.css";
import useForm from "./UseFrom";
import validate from "./ValidateData";
import BoltIcon from "@mui/icons-material/Bolt";
import Link from "next/link";

const FormSignin = () => {
	const { handleChange, values, handleSubmit, errors } = useForm(validate);
	return (
		<div className={styles.formContentRight}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<BoltIcon fontSize="large" className={styles.boltIcon} />
				<h1>Login</h1>
				<h5>Get start with us today! Create your account by filling out</h5>

				<button className={styles.formInputGoogleBtn} type="submit">
					Sign up with Google
				</button>

				<div className={styles.divContainer}>
					<span className={styles.signupEmail}> or Sign up with Email</span>
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
					<div className={styles.remember}>
						<input type="checkbox" className={styles.checkboxInput} />
						<span className={styles.spanCheck}></span>
						Remember me
						<span className={styles.checkboxForgetPass}>
							<a href="/signup">
								<div className={styles.forgetPass}>Forget password ?</div>
							</a>
						</span>
					</div>
				</div>
				<button className={styles.formInputBtn} type="submit">
					Login in
				</button>
				<span className={styles.formInputLogin}>
					Not registered yet?<Link href="/signup"> Create an Account</Link>
				</span>
			</form>
		</div>
	);
};

export default FormSignin;
