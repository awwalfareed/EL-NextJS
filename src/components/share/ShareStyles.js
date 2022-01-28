import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(3),
		margin: "auto",
		maxWidth: 600,
		height: 110,
		marginTop: "2%",
		[theme.breakpoints.down("sm")]: {
			height: 80,
			padding: theme.spacing(1),
		},
	},

	input: {
		[`& fieldset`]: { borderRadius: 30 },
		width: "100%",
		[theme.breakpoints.down("sm")]: {},
	},

	icons: {
		marginTop: "2%",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "0%",
		},
	},

	photo: {
		marginLeft: "10%",
		[theme.breakpoints.down("sm")]: {
			fontSize: 14,
			marginLeft: "2%",
		},
	},

	small: {
		[theme.breakpoints.down("sm")]: {
			marginLeft: "20%",
			marginTop: "20%",
			width: theme.spacing(4),
			height: theme.spacing(4),
		},
	},
}));

export { useStyles };
