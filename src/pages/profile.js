import React from "react";
import Leftbar from "../components/Leftbar";
import Profile from "../components/profile/Profile";

import Rightbar from "../components/Rightbar";
import Feed from "../components/Feed";
import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Introduction from "../components/Introduction";

const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},

	profile: { marginLeft: "16%", marginTop: "2%" },

	leftbar: {
		marginTop: "-40%",
	},

	avatarLarge: {
		width: theme.spacing(32),
		height: theme.spacing(32),
		marginTop: "-10%",
		marginLeft: "42%",
	},
}));

const profile = () => {
	const classes = useStyles();
	return (
		<>
			<Navbar />
			<Grid className={classes.profile}>
				<Image
					src="/assets/post/3.jpeg"
					alt=""
					width="1600"
					height="400"
					className={classes.profileImage}
				/>
				<Avatar
					aria-label="recipe"
					className={classes.avatarLarge}
					style={{
						border: "3px solid white",
					}}
					src="data:image/jpeg;base64,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"
				/>

				<Typography
					variant="h4"
					style={{ fontWeight: 600, textAlign: "center", marginTop: 20 }}
				>
					Ahror Valiev
				</Typography>
			</Grid>

			<Grid container>
				<Grid item sm={2} xs={2} className={classes.leftbar}>
					<Leftbar />
				</Grid>

				<Grid item sm={7} xs={10} style={{ marginTop: "-5%" }}>
					<Feed />
				</Grid>
				<Grid
					item
					className={classes.right}
					style={{ marginTop: "-4%", marginLeft: "1%" }}
				>
					<Introduction />
				</Grid>
			</Grid>
		</>
	);
};

export default profile;
