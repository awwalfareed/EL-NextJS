import { Container, Typography } from "@material-ui/core";
import {
	Bookmark,
	List,
	ExitToApp,
	Home,
	Person,
	PhotoCamera,
	PlayCircleOutline,
	Settings,
	Storefront,
	TabletMac,
} from "@material-ui/icons";
import { useStyles } from "./LeftbarStyles.js";
import React from "react";
import { logout, selectUser, selectUserData } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Router from "next/router";

const Leftbar = () => {
	const classes = useStyles();

	const user = useSelector(selectUser);
	const userData = useSelector(selectUserData);
	const dispatch = useDispatch();
	const handleLogout = (e) => {
		e.preventDefault();

		dispatch(logout());
		Router.push("/");
	};
	return (
		<>
			<Container className={classes.container}>
				<div className={classes.item}>
					<Home className={classes.icon} />
					<Typography className={classes.text}>Homepage</Typography>
				</div>
				<div className={classes.item}>
					<Person className={classes.icon} />
					<Typography className={classes.text}>Friends</Typography>
				</div>
				<div className={classes.item}>
					<List className={classes.icon} />
					<Typography className={classes.text}>Lists</Typography>
				</div>
				<div className={classes.item}>
					<PhotoCamera className={classes.icon} />
					<Typography className={classes.text}>Camera</Typography>
				</div>
				<div className={classes.item}>
					<PlayCircleOutline className={classes.icon} />
					<Typography className={classes.text}>Videos</Typography>
				</div>
				<div className={classes.item}>
					<TabletMac className={classes.icon} />
					<Typography className={classes.text}>Apps</Typography>
				</div>
				<div className={classes.item}>
					<Bookmark className={classes.icon} />
					<Typography className={classes.text}>Collections</Typography>
				</div>
				<div className={classes.item}>
					<Storefront className={classes.icon} />
					<Typography className={classes.text}>Market Place</Typography>
				</div>
				<div className={classes.item}>
					<Settings className={classes.icon} />
					<Typography className={classes.text}>Settings</Typography>
				</div>
				<div className={classes.item}>
					<ExitToApp
						className={classes.icon}
						onClick={(e) => handleLogout(e)}
					/>
					<Typography className={classes.text} onClick={(e) => handleLogout(e)}>
						Logout
					</Typography>
				</div>
			</Container>
		</>
	);
};

export default Leftbar;
