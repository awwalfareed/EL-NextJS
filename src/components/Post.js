import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { MoreHoriz, ThumbUpAlt } from "@material-ui/icons";
import { Users } from "../../data";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "70%",
		marginLeft: "12%",
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
	avatar: {
		backgroundColor: red[500],
	},
}));

export default function Post({ post }) {
	const classes = useStyles();

	return (
		<>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar
							aria-label="recipe"
							className={classes.avatar}
							src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
						/>
					}
					action={
						<IconButton aria-label="settings">
							<MoreHoriz />
						</IconButton>
					}
					title={Users.filter((u) => u.id === post.userId)[0].username}
					subheader={post.date}
				/>
				<CardContent>
					<Typography paragraph>{post?.desc}</Typography>
				</CardContent>
				<CardMedia
					className={classes.media}
					image={post.photo}
					title="Paella dish"
				/>

				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<ThumbUpAlt style={{ color: "primary" }} />
					</IconButton>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon style={{ color: "tomato" }} />
					</IconButton>
					{post.like}
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
					<span style={{ marginLeft: "55%" }}>{post.comment}Comments</span>
				</CardActions>
			</Card>
		</>
	);
}
