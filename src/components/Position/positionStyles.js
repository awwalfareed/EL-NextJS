import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	text: {
		marginTop: -30,
		fontSize: 12,
	},

    ButtonRequest: {
		fontSize: 11,
		
		borderRadius: "10px 0px 10px 0px",
	},

	PaperMargin: {
		marginBottom: 10,
		marginLeft: "2.5%",
		marginTop: 10,
		width: "100%",
        borderRadius:10,

		[theme.breakpoints.down("md")]: {},
	},

	avatarMargin: {
		marginTop: "-50%",
	},

	fullText: {
		marginTop: "-5%",
	},

	nick: {
		fontSize: 11,
		color: "blue",

		[theme.breakpoints.down("md")]: {
			marginRight: 3,
		},
	},

	job: {
		fontSize: 11,
		color: "gray",
		[theme.breakpoints.down("md")]: {
			fontSize: 12,
			marginRight: "20%",
		},
	},
	username: {
		fontWeight: 600,
		fontSize: 12,
	},
}));

export { useStyles };
