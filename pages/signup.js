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
import { signup } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import SuccessForm from "../components/SuccessForm";

export default function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const user = useSelector(selectUser);

	const dispatch = useDispatch();
	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(
			signup({
				name: name,
				email: email,
				password: password,
				signUp: true,
			})
		);
	};

	return (
		<div>
			{user ? (
				<SuccessForm />
			) : (
				<Grid
					container
					sx={{ height: "50%", width: "75%", marginTop: 5, marginLeft: 30 }}
				>
					<Grid
						item
						xs={12}
						sm={4}
						md={6}
						component={Paper}
						elevation={6}
						square
					>
						<Box
							sx={{
								my: 10,
								mx: 15,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								[`& fieldset`]: {
									borderRadius: 30,
								},
							}}
						>
							<BoltSharpIcon
								sx={{ fontSize: 50, mt: -6, mr: 55, mb: 6 }}
								color="primary"
							/>

							<Typography variant="h4" mb={2} mr={43} sx={{ fontWeight: 600 }}>
								Sign Up
							</Typography>
							<Typography mr={19} mb={5}>
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
									p: 1,
									"&.MuiButton-text": { color: "black" },
									border: "1px #d3d3d3 solid",
									fontSize: 12,
									fontWeight: 600,
								}}
							>
								<Avatar
									src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20190923152039%21Google_%22G%22_Logo.svg"
									size={100}
									backgroundColor="rgba(0,0,0,0)"
									sx={{ width: 20, height: 20 }}
								/>
								Sign up with Google
							</Button>

							<div className={styles.divContainer}>
								<span className={styles.signupEmail}>
									{" "}
									or Sign up with Email
								</span>
							</div>

							<Box
								component="form"
								noValidate
								onSubmit={(e) => handleSubmit(e)}
								sx={{ mt: 0 }}
							>
								Name*
								<TextField
									hiddenLabel
									margin="normal"
									required
									fullWidth
									id="name"
									placeholder="Name"
									name="name"
									autoComplete="name"
									autoFocus
									size="small"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
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
									size="small"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
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
									size="small"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<FormControlLabel
									control={
										<Checkbox
											value="remember"
											color="primary"
											sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
										/>
									}
									label="Remember me"
								/>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 2, mb: 2, borderRadius: 30, p: 1 }}
								>
									Sign Up
								</Button>
								<Grid container>
									<Grid item>
										Already have an Account?
										<Link href="/login" variant="body2">
											Login In
										</Link>
									</Grid>
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
								"url(https://i.ibb.co/ns3tpJ0/pexels-rodnae-productions-8369653.jpg)",
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
			)}
		</div>
	);
}
