import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: "2%",
	},

	introInfo: {
		marginLeft: "27%",
		marginTop: "-12%",
		[theme.breakpoints.down("md")]: {
			marginTop: "-6%",
		},
	},

	buttons: {
		marginLeft: "75%",
		marginTop: "-2%",

		[theme.breakpoints.down("sm")]: {
			display: "flex",
			marginTop: theme.spacing(1),
			marginLeft: "10%",
		},
	},

	button: {
		fontSize: 11,
		marginLeft: "8%",
		marginBottom: "8%",
		[theme.breakpoints.down("sm")]: {
			justifyContent: "space-between",
			marginLeft: "2%",
			padding: 2,
			fontSize: 10,
			width: "28%",
			justifyContent: "center",
		},

		borderRadius: 20,
	},

	box: {
		fontSize: 16,
		fontWeight: 500,

		color: "gray",
		[theme.breakpoints.down("sm")]: {
			fontSize: 12,
			fontWeight: 400,
			color: "gray",
		},
	},

	profile: {
		marginTop: "5%",

		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(7),
		},
	},
	fullName: {
		fontSize: 28,
		fontWeight: 600,
		[theme.breakpoints.down("sm")]: {
			fontSize: 16,
			fontWeight: 500,
			marginLeft: theme.spacing(4),
		},
	},

	stageName: {
		color: "blue",
		fontSize: 16,
		[theme.breakpoints.down("sm")]: {
			fontSize: 12,
			color: "blue",
			marginLeft: theme.spacing(4),
		},
	},
	post: {
		fontSize: 18,
		color: "gray",
		[theme.breakpoints.down("sm")]: {
			fontSize: 12,
			color: "gray",
			marginLeft: theme.spacing(4),
		},
	},
	interest: {
		fontSize: 20,
		fontWeight: 500,

		[theme.breakpoints.down("sm")]: {
			fontSize: 12,
			fontWeight: 500,

			marginLeft: theme.spacing(4),
		},
	},

	follow: {
		fontSize: 15,
		color: "grey",
		fontWeight: 500,
		marginRight: "5%",
		[theme.breakpoints.down("sm")]: {
			fontSize: 10,
		},
	},
	followMargin: {
		marginTop: "1%",
		[theme.breakpoints.down("sm")]: {
			marginLeft: theme.spacing(4),
			marginTop: "-1%",
		},
	},
	paper: {
		padding: theme.spacing(1),
		marginTop: "-2%",
		textAlign: "center",
		color: theme.palette.text.secondary,
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(0),
		},
	},

	paperMenu: {
		marginTop: 8,
		[theme.breakpoints.down("sm")]: {
			marginTop: 10,
		},
	},
	suggestionPaper: { marginTop: 10 },

	avatarLarge: {
		[theme.breakpoints.down("sm")]: {
			width: theme.spacing(12),
			height: theme.spacing(12),
			marginTop: theme.spacing(-6),
		},
		width: theme.spacing(28),
		height: theme.spacing(28),
		marginTop: "-6%",
		marginLeft: "8%",
	},

	postGrid: {
		[theme.breakpoints.down("sm")]: {
			marginLeft: theme.spacing(4),
			width: "40%",
		},
	},

	fullContainerLg: {
		display: "flex",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},

	fullConatinerSm: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "flex",
		},
	},

	feed: {
		marginTop: "3%",
	},
	viewButton: {
		fontSize: 11,
		padding: 2,
		marginLeft: "38%",
		marginBottom: 10,
		textTransform: "none",
	},
	reviewButton: {
		fontSize: 11,
		padding: 2,
		marginLeft: "38%",

		marginBottom: 10,
		textTransform: "none",
	},
}));

export { useStyles };
