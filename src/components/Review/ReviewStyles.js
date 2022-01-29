import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	text: {
		marginTop: -30,
		fontSize: 13,
	},

	PaperMargin: {
		marginBottom: 25,
		marginTop: -15,

		[theme.breakpoints.down("md")]: {},
	},

	nick: {
		fontSize: 12,
		color: "blue",
		marginRight: 18,
		[theme.breakpoints.down("md")]: {
			marginRight: 3,
		},
	},

	job: {
		fontSize: 13,
		color: "gray",
		[theme.breakpoints.down("md")]: {
			fontSize: 12,
			marginRight: "20%",
		},
	},
	username: {
		fontWeight: 600,
	},
}));

export { useStyles };
