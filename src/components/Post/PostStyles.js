import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "100%",
		marginTop: "2%",

		[theme.breakpoints.down("sm")]: {
			maxWidth: "100%",
			marginTop: "3%",
		},
	},

	input: {
		[`& fieldset`]: { borderRadius: 30 },
		width: "80%",
		marginLeft: "10%",
		marginBottom: "2%",
	},

	icons: {
		marginLeft: "15%",
	},

	media: {
		height: 0,
		paddingTop: "55%",
		[theme.breakpoints.down("sm")]: {
			paddingTop: "54%",
			marginTop: "-8%",
		},
	},

	avatarLarge: {
		width: theme.spacing(7),
		height: theme.spacing(7),
		[theme.breakpoints.down("sm")]: {
			width: theme.spacing(5),
			height: theme.spacing(5),
		},
	},

	paragraph: {
		[theme.breakpoints.down("sm")]: {
			fontSize: 14,
			marginTop: "-8%",
		},
	},

	comment: {
		marginLeft: "55%",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "28%",
		},
	},
}));

export { useStyles };
