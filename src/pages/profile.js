import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Navbar from "../components/Navbar/Navbar";
import Feed from "../components/Feeds/Feed";
import { Avatar, Typography, Button, Box } from "@material-ui/core";
import Image from "next/image";
import { Sms } from "@material-ui/icons";
import Introduction from "../components/introduction/Introduction";
import Menu from "../components/Menu/Menu";
import Review from "../components/Review/Review";
import Suggestions from "../components/Suggestions/Suggestions";
import { Users } from "../../data";
import Share from "../components/share/Share";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: "2%",
	},

	introInfo: {
		marginLeft: "28%",
		marginTop: "-10%",
		[theme.breakpoints.down("md")]: {
			marginTop: "-6%",
		},
	},

	buttons: {
		marginLeft: "72%",
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			marginTop: theme.spacing(1),
			marginLeft: "10%",
		},
	},

	button: {
		marginLeft: "2%",
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
		fontSize: 32,
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
		fontSize: 20,
		color: "gray",
		[theme.breakpoints.down("sm")]: {
			fontSize: 12,
			color: "gray",
			marginLeft: theme.spacing(4),
		},
	},
	interest: {
		fontSize: 22,
		fontWeight: 500,

		[theme.breakpoints.down("sm")]: {
			fontSize: 12,
			fontWeight: 500,

			marginLeft: theme.spacing(4),
		},
	},

	follow: {
		fontSize: 14,
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
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(0),
		},
	},

	paperMenu: {
		marginTop: 20,
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
}));

export default function FullWidthGrid() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />

			<Container>
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
					<div className={classes.introInfo}>
						<Typography className={classes.fullName}>Ahror Valiev</Typography>
						<Typography className={classes.stageName}>@awwalTech</Typography>
						<Typography className={classes.post}>My first posting</Typography>
						<Typography className={classes.interest}>
							Sofware Develope | Self Motivated | Book Lover | Traveller
						</Typography>
						<div className={classes.followMargin}>
							<span className={classes.follow}>3.5M Followers</span>
							<span className={classes.follow}>500 Following</span>
						</div>
					</div>
					<div className={classes.buttons}>
						<Button
							className={classes.button}
							variant="contained"
							color="primary"
							startIcon={<Sms />}
						>
							Default
						</Button>
						<Button
							className={classes.button}
							variant="contained"
							color="primary"
						>
							Primary
						</Button>
						<Button
							className={classes.button}
							variant="outlined"
							color="primary"
							href="#outlined-buttons"
						>
							More
						</Button>
					</div>
				</Grid>
				<Paper className={classes.paperMenu}>
					<Menu />
				</Paper>
				<div className={classes.root}>
					<Grid container spacing={3} className={classes.fullContainerLg}>
						{/* <Grid item xs={3}>
							<Typography
								style={{ marginLeft: 20, fontWeight: 600, fontSize: 20 }}
							>
								Introduction
							</Typography>
							<Introduction />
							<Typography
								style={{ marginLeft: 20, fontWeight: 600, fontSize: 20 }}
							>
								People You may know
							</Typography>
							{Users.map((u) => (
								<Suggestions key={u.id} user={u} />
							))}
						</Grid> */}

						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<Box
									display="flex"
									flexDirection="row"
									justifyContent="space-between"
									className={classes.box}
								>
									<Box order={1} m={1}>
										Posts
									</Box>
									<Box order={2} m={1}>
										Article
									</Box>
									<Box order={2} m={1}>
										Documents
									</Box>

									<Box order={4} m={1}>
										Filters
									</Box>
								</Box>
							</Paper>
							<div className={classes.feed}>
								<Share />
								<Feed />
							</div>
						</Grid>
						{/* <Grid item xs={3}>
							<Typography
								style={{ marginLeft: 20, fontWeight: 600, fontSize: 20 }}
							>
								5 Reviews
							</Typography>
							{Users.map((u) => (
								<Review key={u.id} user={u} />
							))}
						</Grid> */}
					</Grid>

					<Grid container spacing={3} className={classes.fullConatinerSm}>
						<Grid item xs={3}>
							<Typography
								style={{ marginLeft: 20, fontWeight: 600, fontSize: 20 }}
							>
								Introduction
							</Typography>
							<Introduction />
							<Typography
								style={{ marginLeft: 20, fontWeight: 600, fontSize: 20 }}
							>
								People You may know
							</Typography>
							{Users.map((u) => (
								<Suggestions key={u.id} user={u} />
							))}
						</Grid>

						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<Box
									display="flex"
									flexDirection="row"
									justifyContent="space-between"
									style={{ fontSize: 16, fontWeight: 500, color: "gray" }}
									className={classes.box}
								>
									<Box order={1} p={0} m={1}>
										Posts
									</Box>
									<Box order={2} p={0} m={1}>
										Article
									</Box>
									<Box order={2} p={0} m={1}>
										Documents
									</Box>

									<Box order={4} p={0} m={1}>
										Filters
									</Box>
								</Box>
							</Paper>
							<div>
								<Share />
								<Feed />
							</div>
						</Grid>
						<Grid item xs={3}>
							<Typography
								style={{ marginLeft: 20, fontWeight: 600, fontSize: 20 }}
							>
								5 Reviews
							</Typography>
							{Users.map((u) => (
								<Review key={u.id} user={u} />
							))}
						</Grid>
					</Grid>
				</div>
			</Container>
		</>
	);
}
