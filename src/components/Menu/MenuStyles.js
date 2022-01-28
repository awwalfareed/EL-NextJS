import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	boxLg: {
		display: "none",

		[theme.breakpoints.up("sm")]: {
			display: "flex",
			fontSize: 16,
			fontWeight: 500,
			color: "gray",
			flexWrap: "nowrap",
			justifyContent: "space-around",
			[theme.breakpoints.down("md")]: {
				fontSize: 12,
			},
		},
	},

	boxSm: {
		display: "flex",
		fontSize: 12,
		marginLeft: "9%",
		flexWrap: "nowrap",

		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
}));

export { useStyles };
