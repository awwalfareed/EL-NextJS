import React from "react";
import Button from "@mui/material/Button";
import { logout, selectUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Logout = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const handleLogout = (e) => {
		e.preventDefault();

		dispatch(logout());
	};
	return (
		<div>
			<h1>
				Welcome,{user.name}
				<span>
					Your Password:{user.password}
					Your Email:{user.email}
				</span>
			</h1>
			<Button variant="contained" onClick={(e) => handleLogout(e)}>
				Log Out
			</Button>
		</div>
	);
};

export default Logout;
