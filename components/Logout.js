import React from "react";
import Button from "@mui/material/Button";
import { logout, selectUser, selectUserData } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserData } from "../redux/userSlice";


const Logout = () => {
	const user = useSelector(selectUser);
	const userData = useSelector(selectUserData);
	const dispatch = useDispatch();
	const handleLogout = (e) => {
		e.preventDefault();

		dispatch(logout());
	};
	return (
		<div>
			<h1>
				Welcome,
				<hr/>
				
				<span>
					Your Password:{userData.password}<br/>
					Your Email:<span>{userData.email}</span>
				</span>
			</h1>
			<Button variant="contained" onClick={(e) => handleLogout(e)}>
				Log Out
			</Button>
		</div>
	);
};

export default Logout;
