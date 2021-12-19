import React from "react";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "../styles/Logout.module.css";

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

			<button className={styles.button} onClick={(e) => handleLogout(e)}>
				Log out
			</button>
		</div>
	);
};

export default Logout;
