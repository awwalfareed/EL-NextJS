import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "90vh",
		color: "white",
		paddingTop: theme.spacing(15),
		backgroundColor: theme.palette.primary.main,
		position: "sticky",
		top: 0,
		[theme.breakpoints.up("sm")]: {
			backgroundColor: "white",
			color: "#555",
			border: "1px solid #ece7e7",
		},
	},
}));

const Suggestions = () => {
	const classes = useStyles();
	return <Container className={classes.container}></Container>;
};

export default Suggestions;
