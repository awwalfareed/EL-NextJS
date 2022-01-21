import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
	Avatar,
	CardContent,
	CardHeader,
	Typography,
	Button,
} from "@material-ui/core";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	text: {
		marginTop: -30,
	},
	PaperMargin: {
		marginBottom: 10,
		width: "95%",
		marginLeft: 8,
	},
	root: {
		display: "flex",
		flexWrap: "wrap",

		"& > *": {
			marginTop: theme.spacing(-1),
			width: theme.spacing(37),
			height: theme.spacing(30),
		},
	},

	ButtonRequest: {
		fontSize: 10,
		marginLeft: "55%",
		marginBottom: 10,
		marginTop: -12,
	},

	nick: {
		fontSize: 13,
		color: "blue",
		marginRight: 18,
	},

	job: {
		fontSize: 13,
		color: "gray",
	},

	username: {
		fontWeight: 600,
	},
	intro: {
		fontSize: 13,
		marginTop: "-10%",
	},
	fullsuggestion: {
		marginTop: -0,
	},
}));

const Review = ({ user }) => {
	const [expand, setExpand] = useState(false);

	const onClick = () => {
		setExpand(!expand);
	};

	const text = user.reviews;

	const classes = useStyles();
	return (
		<Paper className={classes.PaperMargin}>
			<CardHeader
				avatar={<Avatar alt="" src={user.profilePicture} />}
				title={
					<div className={classes.infos}>
						<div className={classes.username}>{user.username}</div>
						<span className={classes.nick}>{user.nick}</span>
						<span className={classes.job}>{user.job}</span>
					</div>
				}
			/>
			<CardContent>
				<div className={classes.intro}>{user.intro}</div>
			</CardContent>
			<Button
				variant="contained"
				color="primary"
				className={classes.ButtonRequest}
			>
				Send request
			</Button>
		</Paper>
	);
};

export default Review;
