import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	PaperMargin: {
		marginBottom: 10,
	},
	root: {
		display: "flex",
		flexWrap: "wrap",

		"& > *": {
			marginTop: theme.spacing(-1),
			width: theme.spacing(37),
			height: theme.spacing(30),
		},
	},

	ButtonRequest: {
		fontSize: 10,
		marginLeft: "55%",
		marginBottom: 10,
		marginTop: -12,
	},

	nick: {
		fontSize: 13,
		color: "blue",
		marginRight: 18,
	},

	job: {
		fontSize: 13,
		color: "gray",
	},

	username: {
		fontWeight: 600,
	},
	intro: {
		fontSize: 13,
		marginTop: "-10%",
	},
	fullsuggestion: {
		marginTop: -0,
	},
}));

export { useStyles };
