import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./PostStyles.js";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { ThumbUpAlt } from "@material-ui/icons";
import { Users } from "../../../data";
import { useState } from "react";

export default function Post({ post }) {
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);

	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	const classes = useStyles();

	return (
		<>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar
							aria-label="recipe"
							className={classes.avatarLarge}
							src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
						/>
					}
					title={Users.filter((u) => u.id === post.userId)[0].username}
					subheader={post.date}
				/>
				<CardContent>
					<Typography className={classes.paragraph} paragraph>
						{post?.desc}
					</Typography>
				</CardContent>
				<CardMedia
					className={classes.media}
					image={post.photo}
					title="Paella dish"
				/>

				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<ThumbUpAlt style={{ color: "primary" }} onClick={likeHandler} />
					</IconButton>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon style={{ color: "tomato" }} onClick={likeHandler} />
					</IconButton>
					{like}
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
					<span className={classes.comment}>{post.comment}Comments</span>
				</CardActions>
			</Card>
		</>
	);
}
