import Post from "../Post/Post";
import { Posts } from "../../../data";
import { useStyles } from "./FeedStyles.js";

const Feed = () => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.paper}>
				{Posts.map((p) => (
					<Post key={p.id} post={p} />
				))}
			</div>
		</>
	);
};

export default Feed;
