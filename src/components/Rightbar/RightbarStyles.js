import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(15),
		position: "sticky",
		top: 0,
	},
	title: {
		fontSize: 16,
		fontWeight: 500,
		color: "#555",
	},

	link: {
		marginRight: theme.spacing(2),
		color: "#555",
		fontSize: 16,
	},
}));

export { useStyles };
