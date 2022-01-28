import Post from "../Post/Post";
import { Posts } from "../../../data";
import { useStyles } from "./FeedStyles.js";

const Feed = () => {
	const classes = useStyles();
	return (
		<>
			{Posts.map((p) => (
				<Post key={p.id} post={p} />
			))}
		</>
	);
};

export default Feed;
