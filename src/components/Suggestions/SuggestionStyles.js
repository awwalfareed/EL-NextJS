import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	PaperMargin: {
		marginBottom: 10,
		borderRadius: 20,
		width: "65%",
		marginLeft: "18%",
	},

	infos: { marginLeft: "32%", marginTop: "-13%" },

	avatar: {
		marginTop: "-10%",
		marginLeft: "10%",
		borderRadius: "50%",
	},

	ButtonRequest: {
		fontSize: 10,
		width: "100%",
		marginTop: 10,
		borderRadius: "0px 0px 15px 15px",
	},

	nick: {
		fontSize: 10,
		color: "blue",
		marginTop: -3,
	},

	job: {
		fontSize: 10,
		fontWeight: 600,
		marginLeft: "5%",
	},

	username: {
		fontWeight: 600,
		fontSize: 11,
	},
	intro: {
		fontSize: 10,
		marginLeft: 9,
	},

	headerImage: {
		borderRadius: "10px",
	},

	divImage: {
		marginLeft: "2.5%",
	},

	boldNum: {
		fontSize: 10,
		fontWeight: 700,
		marginLeft: "5%",
	},
	follower: {
		fontSize: 10,
		fontWeight: 700,
		color: "gray",
		marginRight: "8%",
	},
}));

export { useStyles };
