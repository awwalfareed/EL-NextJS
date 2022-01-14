import { makeStyles, Container } from "@material-ui/core";
import Post from "./Post";
import { Posts } from "../../data";
import Share from "../share/Share";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(16),
	},
}));

const Feed = () => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<Share />

			{Posts.map((p) => (
				<Post key={p.id} post={p} />
			))}
		</Container>
	);
};

export default Feed;
