import { makeStyles, Container } from "@material-ui/core";
import Post from "./Post";
import { Posts } from "../../data";
import Share from "../share/Share";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(15),
		width: theme.spacing(120),
	},
}));

const Feed = () => {
	const classes = useStyles();
	return (
		<>
			<Share />

			{Posts.map((p) => (
				<Post key={p.id} post={p} />
			))}
		</>
	);
};

export default Feed;
