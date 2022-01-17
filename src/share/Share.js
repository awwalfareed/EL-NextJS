import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

import { Description, LocationOn, PhotoLibrary } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import { Users } from "../../data";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "70%",
		marginLeft: "12%",
	},

	small: {
		width: theme.spacing(5),
		height: theme.spacing(5),
		marginBottom: theme.spacing(-5),
		marginTop: "4%",
		marginLeft: "3%",
	},
	shareInput: {
		width: "70%",
		marginLeft: "12%",
		borderRadius: "6",

		marginBottom: "5%",
	},

	input: {
		[`& fieldset`]: { borderRadius: 30 },
		width: "80%",
		marginLeft: "10%",
		marginBottom: "2%",
	},

	icons: {
		marginLeft: "15%",
	},

	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
}));

const Share = () => {
	const classes = useStyles();
	return (
		<div>
			<Card className={classes.shareInput}>
				<Avatar src="/assets/person/1.jpeg" className={classes.small} />
				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					className={classes.input}
					size="small"
				/>
				<CardActions className={classes.icons}>
					<IconButton className={classes.photos}>
						<PhotoLibrary style={{ color: "red" }} />
					</IconButton>
					Photo/Video
					<IconButton>
						<Description style={{ color: "blue" }} className={classes.photo} />
					</IconButton>
					Document
					<IconButton>
						<SentimentVerySatisfiedIcon style={{ color: "goldenrod" }} />
					</IconButton>
					Feelings
					<IconButton>
						<LocationOn style={{ color: "green" }} className={classes.photo} />
					</IconButton>
					Check in
				</CardActions>
			</Card>
		</div>
	);
};

export default Share;
