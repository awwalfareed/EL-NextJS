import React from "react";

import { useStyles  } from "./positionStyles";
import Paper from "@material-ui/core/Paper";
import { Avatar, Button, CardContent, CardHeader, Typography } from "@material-ui/core";
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
			<Paper className={classes.PaperMargin} variant="outlined">
                <Button variant="contained"
				color="primary"
				className={classes.ButtonRequest}>
                    Position 2021 - Present
                </Button>
				<CardHeader
					avatar={
						<div className={classes.avatarMargin}>
							<Avatar alt="" src={user.profilePicture} />
						</div>
					}
					title={
						<div className={classes.fullText}>
							<div className={classes.username}>{user.username}</div>
							<div className={classes.nick}>{user.nick}</div>
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
				<div style={{ fontSize: 10, marginLeft: "70%" }}>January 29, 2022</div>
			</Paper>
		</>
	);
};

export default Review;
