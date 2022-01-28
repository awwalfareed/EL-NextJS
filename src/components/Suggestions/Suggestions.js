import React from "react";
import { useStyles } from "./SuggestionStyles.js";
import Paper from "@material-ui/core/Paper";
import { Avatar, CardContent, CardHeader, Button } from "@material-ui/core";
import { useState } from "react";

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
