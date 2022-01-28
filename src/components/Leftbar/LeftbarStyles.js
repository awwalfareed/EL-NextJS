import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "70vh",
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
	item: {
		display: "flex",
		alignItems: "center",
		marginBottom: theme.spacing(4),
		[theme.breakpoints.up("sm")]: {
			marginBottom: theme.spacing(3),
			cursor: "Pointer",
		},
	},

	icon: {
		marginRight: theme.spacing(1),
		[theme.breakpoints.up("sm")]: {
			fontSize: "18px",
		},
	},

	text: {
		fontWeight: 500,
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
}));

export { useStyles };
