import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	text: {
		marginTop: -30,
		fontSize: 13,
	},

	fullText: {
		marginTop: "-5%",
	},

	PaperMargin: {
		marginBottom: 10,
		[theme.breakpoints.down("md")]: {},
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
