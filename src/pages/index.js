import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import styles from "../../styles/Login.module.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { setUserData } from "../redux/userSlice";
import Router from "next/router";
import { useForm } from "../components/useForm";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://truetn.com">
				www.truetn.com
			</Link>
			{new Date().getFullYear()}
		</Typography>
	);
}

const CustomButton = withStyles({
	root: {
		boxShadow: "none",
		textTransform: "none",
		fontSize: 16,
		padding: "6px 12px",
		border: "1px solid",
		lineHeight: 1.5,
	},
})(Button);

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	image: {
		backgroundImage:
			"url(https://i.ibb.co/8sT76XN/pexels-tima-miroshnichenko-7567588.jpg)",
		backgroundRepeat: "no-repeat",
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	paper: {
		margin: theme.spacing(8, 1),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "70%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			padding: 2,
		},
	},
	TextField: {
		[`& fieldset`]: { borderRadius: 30 },
		[theme.breakpoints.down("sm")]: {
			inputProps: {
				[theme.breakpoints.down("sm")]: {
					padding: 40,
				},
			},
		},
	},

	inputProps: {
		[theme.breakpoints.down("sm")]: {
			padding: 40,
		},
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		padding: "1.8%",
		borderRadius: 30,
		[theme.breakpoints.down("sm")]: {
			padding: "2.5%",
		},
	},

	logoGoogle: {
		width: 20,
		height: 20,
		margin: 2,
		marginRight: 10,
	},

	SignLeft: {
		marginRight: "56%",
		fontWeight: 600,
		marginTop: 10,
		marginBottom: 15,
		[theme.breakpoints.down("sm")]: {
			marginRight: "70%",
			fontSize: 25,
			marginTop: "0%",
		},
	},
	logoLeft: {
		marginRight: "60%",
		marginBottom: 20,
		[theme.breakpoints.down("sm")]: {
			marginRight: "75%",
			marginBottom: "5%",
			marginTop: "-15%",
		},
	},

	signupGoogle: {
		"&.MuiButton-text": { color: "black" },
		border: "1px #d3d3d3 solid",
		padding: "1.8%",
		borderRadius: 30,
		[theme.breakpoints.down("sm")]: {
			padding: "2.5%",
		},
	},
}));

const initialValues = {
	id: 0,
	email: "",
	password: "",
	isRemember: false,
};
export default function Login(props) {
	const classes = useStyles();

	const validate = (fieldValues = values) => {
		let temp = { ...errors };

		if ("email" in fieldValues)
			temp.email = /$^|.+@.+..+/.test(fieldValues.email)
				? ""
				: "Email is not valid.";
		if ("password" in fieldValues)
			temp.password =
				fieldValues.password.length > 6 ? "" : "Minimum 6 numbers required.";
		setErrors({
			...temp,
		});
		if (fieldValues == values) return Object.values(temp).every((x) => x == "");
	};

	const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
		useForm(initialValues, true, validate);
	// const clientId =
	// 	"144873523041-hg41dvgqatds7e0qbs02m0k9kj0k2g51.apps.googleusercontent.com";

	// const [showLoginButton, setShowLoginButton] = useState(true);
	// const [showLogoutButton, setShowLogoutButton] = useState(false);

	// const onLoginSuccess = (res) => {
	// 	console.log("Login Success", res.profileObj);
	// 	setShowLoginButton(false);
	// 	setShowLogoutButton(true);
	// };
	// const onFailureSuccess = (res) => {
	// 	console.log("Login Failed", res);
	// };

	// const onSignoutSuccess = (res) => {
	// 	alert("You haev been signed out successfully");
	// 	setShowLogoutButton(false);
	// };

	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			Router.push("/home");
		}

		dispatch(
			login({
				loggedIn: true,
			})
		);

		dispatch(
			setUserData({
				email: email,
				password: password,
			})
		);
	};

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />

			<Grid item xs={12} sm={8} md={6} component={Paper} elevation={6}>
				<div className={classes.paper}>
					<OfflineBoltIcon
						style={{ fontSize: 55 }}
						color="primary"
						className={classes.logoLeft}
					/>

					<Typography component="h1" variant="h4" className={classes.SignLeft}>
						Login
					</Typography>
					<form
						className={classes.form}
						noValidate
						onSubmit={(e) => handleSubmit(e)}
					>
						<CustomButton
							type="submit"
							fullWidth
							className={classes.signupGoogle}
						>
							<Avatar
								src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20190923152039%21Google_%22G%22_Logo.svg"
								size={100}
								className={classes.logoGoogle}
							/>
							Sign up with Google
						</CustomButton>
						{/* {showLoginButton ? (
							<div className={classes.signin2}>
								<GoogleLogin
									render={(renderProps) => (
										<button
											onClick={renderProps.onClick}
											disabled={renderProps.disabled}
										>
											This is my custom Google button
										</button>
									)}
									clientId={clientId}
									onSuccess={onLoginSuccess}
									onFailure={onFailureSuccess}
									cookiePolicy={"single_host_origin"}
								/>
							</div>
						) : null}
						{showLogoutButton ? (
							<GoogleLogout
								clientId={clientId}
								buttonText="Logout"
								onLogoutSuccess={onSignoutSuccess}
								className={styles.gglSign}
							></GoogleLogout>
						) : null} */}
						<div className={styles.divContainer}>
							<span className={styles.signupEmail}>or Sign up with Email</span>
						</div>
						Email*
						<TextField
							hiddenLabel
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							placeholder="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							className={classes.TextField}
							value={values.email}
							onChange={handleInputChange}
							error={errors.email}
							helperText={errors.email}
							inputProps={{
								style: {
									padding: 15,
								},
							}}
						/>
						Password*
						<TextField
							hiddenLabel
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							placeholder="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							className={classes.TextField}
							value={values.password}
							onChange={handleInputChange}
							error={errors.password}
							helperText={errors.password}
							size="normal"
							inputProps={{
								style: {
									padding: 15,
								},
							}}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Login
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="/signup" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
			<Grid item xs={false} sm={4} md={6} className={classes.image} />
		</Grid>
	);
}
