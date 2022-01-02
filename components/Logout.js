import React from "react";
import Button from '@material-ui/core/Button';
import { logout, selectUser, selectUserData } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserData } from "../redux/userSlice";
import Navbar from "./Navbar";
import Feed from "./Feed"
import Leftbar from "./Leftbar"

import Rightbar from "./Rightbar"
import {Grid, makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme)=>({}))

const Logout = () => {
	const classes = useStyles()

	const user = useSelector(selectUser);
	const userData = useSelector(selectUserData);
	const dispatch = useDispatch();
	const handleLogout = (e) => {
		e.preventDefault();

		dispatch(logout());
	};
	return (
		<div>
			<Button variant="contained" onClick={(e) => handleLogout(e)}>
				Log Out
			</Button>
        </div>
	);
};

export default Logout;
