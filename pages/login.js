import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BoltSharpIcon from "@mui/icons-material/BoltSharp";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import Logout from "../components/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { setUserData } from "../redux/userSlice";
import Router from "next/router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// import { GoogleLogin, GoogleLogout } from "react-google-login";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

export default function LoginIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

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

		setEmailError(false);
		setPasswordError(false);

		if (email == "") {
			setEmailError(true);
			return Router.push("/login");
		}

		if (password == "") {
			setPasswordError(true);
			return Router.push("/login");
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

	const style = {
		fontSize: { xs: 14, md: 45 },
	};

	const text = {
		fontSize: { xs: 0, md: 16 },
	};

	const buttonPad = {
		p: { xs: 1, md: 2 },
	};

	const textSm = {
		fontSize: { xs: 10, md: 15 },
		ml: { xs: "45%", md: "59%" },
	};
	const textSmall = {
		fontSize: { xs: 10, md: 15 },
	};

	const inputW = {
		mx: { xs: "8%", md: "15%" },
	};

	return (
		<>
			{user ? (
				<Logout />
			) : (
				<ThemeProvider theme={theme}>
					<Grid container component="main" sx={{ height: "100vh" }}>
						<CssBaseline />
						<Grid
							item
							xs={12}
							sm={8}
							md={6}
							component={Paper}
							elevation={6}
							square
						>
							<Box
								sx={{
									my: 6,
									mx: "15%",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									...inputW,
									[`& fieldset`]: {
										borderRadius: 30,
									},
								}}
							>
								<BoltSharpIcon
									sx={{ fontSize: 60, mx: 6, mb: 2, mr: "100%" }}
									color="primary"
								/>

								<Typography
									variant="h4"
									mr="77%"
									fontWeight={700}
									fontSize={50}
									sx={{ ...style }}
								>
									Login
								</Typography>
								<Typography mr="48%" mt={1} mb={2} sx={{ ...text }}>
									See your growth and get consulting support!
								</Typography>

								<Button
									type="submit"
									fullWidth
									variant="text"
									sx={{
										mt: 2,
										mb: 2,
										borderRadius: 30,
										p: 2,
										"&.MuiButton-text": { color: "black" },
										border: "1px #d3d3d3 solid",
										fontSize: 12,
										fontWeight: 600,
										...buttonPad,
									}}
								>
									<Avatar
										src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20190923152039%21Google_%22G%22_Logo.svg"
										size={100}
										sx={{ width: 20, height: 20 }}
									/>
									Sign up with Google
								</Button>
								{/* {showLoginButton ? (
									<GoogleLogin
										clientId={clientId}
										buttonText="Sign up with Google"
										onSuccess={onLoginSuccess}
										onFailure={onFailureSuccess}
										// cookiePolicy={"single_host_origin"}
									/>
								) : null}

								{showLogoutButton ? (
									<GoogleLogout
										clientId={clientId}
										buttonText="Logout"
										onLogoutSuccess={onSignoutSuccess}
									></GoogleLogout>
								) : null} */}

								<div className={styles.divContainer}>
									<span className={styles.signupEmail}>
										or Sign up with Email
									</span>
								</div>

								<Box
									component="form"
									noValidate
									onSubmit={(e) => handleSubmit(e)}
									sx={{ mt: 1 }}
								>
									Email*
									<TextField
										hiddenLabel
										margin="normal"
										required
										fullWidth
										id="email"
										placeholder="Email"
										name="email"
										autoComplete="email"
										autoFocus
										size="normal"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										error={emailError}
										helperText={emailError ? "invalid input email" : null}
									/>
									Password*
									<TextField
										hiddenLabel
										margin="normal"
										required
										fullWidth
										name="password"
										placeholder="Password"
										type="password"
										id="password"
										autoComplete="current-password"
										size="normal"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										error={passwordError}
										helperText={passwordError ? "invalid input password" : null}
									/>
									<FormControlLabel
										control={
											<Checkbox
												value="remember"
												color="primary"
												sx={{
													"& .MuiSvgIcon-root": { fontSize: 18 },
												}}
											/>
										}
										label="Remember me"
									/>
									<Link
										href="/signup"
										variant="body3"
										sx={{ ml: "58%", ...textSm }}
									>
										Forgot password?
									</Link>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										sx={{ mt: 2, mb: 2, borderRadius: 30, ...buttonPad }}
									>
										Login
									</Button>
									<Grid container sx={{ ...textSmall, mt: "4%" }}>
										Do not you have an Account?
										<Grid item xs></Grid>
										<Link href="/signup" variant="body3">
											Sign up
										</Link>
									</Grid>
								</Box>
							</Box>
						</Grid>

						<Grid
							item
							xs={false}
							sm={4}
							md={6}
							sx={{
								backgroundImage:
									"url(https://i.ibb.co/8sT76XN/pexels-tima-miroshnichenko-7567588.jpg)",
								backgroundRepeat: "no-repeat",
								backgroundColor: (t) =>
									t.palette.mode === "light"
										? t.palette.grey[50]
										: t.palette.grey[900],
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						/>
					</Grid>
				</ThemeProvider>
			)}
		</>
	);
}
