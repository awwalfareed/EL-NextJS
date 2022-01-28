import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	timeline: {
		marginRight: "60%",
	},

	introMargin: {
		marginLeft: "5%",
	},
	root: {
		display: "flex",
		flexWrap: "wrap",
		marginTop: 10,
		"& > *": {
			marginTop: theme.spacing(-1),
			width: theme.spacing(37),
			height: theme.spacing(50),
			[theme.breakpoints.down("md")]: {
				height: theme.spacing(55),
				width: theme.spacing(37),
			},
		},
	},

	name: {
		fontSize: 14,
		fontWeight: 600,
	},

	social: {
		marginLeft: "12%",
		marginBottom: "2%",
		marginTop: "5%",
		[theme.breakpoints.down("md")]: {
			marginLeft: "7%",

			marginTop: "5%",
		},
	},
}));

export { useStyles };
