import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	timeline: {
		marginRight: "60%",
	},

	introMargin: {
		marginLeft: "5%",
		position: "sticky",
	},
	root: {
		display: "flex",
		flexWrap: "wrap",
		marginTop: "-5%",
		position: "sticky",
		"& > *": {
			marginTop: theme.spacing(-1),
			width: theme.spacing(37),
			height: theme.spacing(54),
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
		marginTop: "5%",
		[theme.breakpoints.down("md")]: {
			marginLeft: "7%",

			marginTop: "5%",
		},
	},
}));

export { useStyles };
