import React from "react";

import { useStyles } from "./ReviewStyles.js";
import Paper from "@material-ui/core/Paper";
import { Avatar, CardContent, CardHeader, Typography } from "@material-ui/core";
import { useState } from "react";
import ShowMoreText from "react-show-more-text";

const Review = ({ user }) => {
	const [expand, setExpand] = useState(false);

	const onClick = () => {
		setExpand(!expand);
	};

	const text = user.reviews;

	const classes = useStyles();
	return (
		<>
			<Paper className={classes.PaperMargin}>
				<CardHeader
					avatar={<Avatar alt="" src={user.profilePicture} />}
					className={classes.avatarMargin}
					title={
						<div className={classes.fullText}>
							<div className={classes.username} style={{ marginTop: 10 }}>
								{user.username}
							</div>
							<span className={classes.nick}>{user.nick}</span>
							<div className={classes.job}>{user.job}</div>
						</div>
					}
				/>
				<CardContent className={classes.text}>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					></Typography>
					<ShowMoreText
						lines={2}
						more={"see more"}
						less={"see less"}
						onClick={onClick}
						expanded={expand}
					>
						{text}
					</ShowMoreText>
				</CardContent>
				<span style={{ fontSize: 10, marginLeft: "70%" }}>
					January 29, 2022
				</span>
			</Paper>
		</>
	);
};

export default Review;
