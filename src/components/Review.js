import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Avatar, CardContent, CardHeader, Typography } from "@material-ui/core";

import { useState } from "react";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ShowMoreText from "react-show-more-text";

const useStyles = makeStyles((theme) => ({
	text: {
		marginTop: -30,
		fontSize: 13,
	},

	fullText: {
		marginTop: "-5%",
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
				className={classes.avatarMargin}
				title={
					<div className={classes.fullText}>
						<div className={classes.username}>{user.username}</div>
						<span className={classes.nick}>{user.nick}</span>
						<span className={classes.job}>{user.job}</span>
						<div>{user.relation}</div>
					</div>
				}
				subheader="September 14, 2016"
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
		</Paper>
	);
};

export default Review;
