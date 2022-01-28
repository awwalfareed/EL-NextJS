import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "60%",
		height: 600,
		backgroundColor: "white",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: "auto",
		[theme.breakpoints.down("sm")]: {
			width: "80%",
			height: "55%",
		},
	},
	form: {
		padding: theme.spacing(0),
	},

	buttonShare: {
		[theme.breakpoints.down("sm")]: {
			marginTop: "-2%",
		},
	},

	paper: {
		display: "flex",
		border: `1px solid ${theme.palette.divider}`,
		flexWrap: "wrap",
		marginTop: "5%",
	},
	divider: {
		margin: theme.spacing(1, 0.5),
	},

	item: {
		marginBottom: theme.spacing(3),
	},
}));

export { useStyles };
