import { Grid, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";

const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
}));

const Home = () => {
	const classes = useStyles();
	return (
		<div>
			<Navbar />
			<Grid container>
				<Grid item sm={2} xs={2}>
					<Leftbar />
				</Grid>
				<Grid item sm={7} xs={10}>
					<Feed />
				</Grid>
				<Grid item sm={3} className={classes.right}>
					<Rightbar />
				</Grid>
			</Grid>
			<Add />
		</div>
	);
};

export default Home;
