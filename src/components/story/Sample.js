
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Avatar, Button, ButtonGroup, CardHeader, Grid } from "@material-ui/core";
import { Work, WorkOutline } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: 0,
		borderRadius: 10,
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main,
	},

	ButtonRequest: {
		fontSize: 11,

		borderRadius: "10px 0px 10px 0px",
	},
	ButtonL: {
		fontSize: 11,
		display: "flex",
		alignItems: "left",
		borderRadius: "10px 0px 10px 0px",
	},

	typo1: {
		
		fontSize: 12,
		marginRight:"30%",
	},
	typo2: {
		
		fontSize: 12,
		marginRight:"15%",
		marginTop:"-5%",
	},
	buttonGroup1: {
		marginTop:"-5%",
	},
	buttonGroup2: {
		marginTop:"-10%",
	},
	button: {
		borderRadius: 20,
		margin: "6%",
		fontSize:12,
	},

	text:{
		fontSize:11,
		
		textAlign:"center"
		
	}
}));

export default function Sample() {
	const classes = useStyles();

	const [expand, setExpand] = useState(true)

	

	return (
		<Timeline align="alternate">
			<TimelineItem></TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent></TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color="primary">
						<Work />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Button
							variant="contained"
							color="primary"
							className={classes.ButtonL}
						>
							Position 2021 - Present
						</Button>
						<CardHeader
							avatar={
								<div className={classes.avatarMargin}>
									<Avatar alt="" src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" />
								</div>
							}
							title={
								<div>
									<Typography className={classes.typo1}>
										June 2019 Currently(1 year, 9 months)
									</Typography>
									,
									<Typography className={classes.typo2}>
										Full Stack Developer at Mindism Tech Pvt Ltdd
									</Typography>
								</div>
							}
						/>
						<div className={classes.buttonGroup1}>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
						</div>
						<div className={classes.buttonGroup2}>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
						</div>
						
						<Typography className={classes.text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
							repudiandae amet reiciendis aperiam mollitia nihil adipisci! Fuga,
							repellendus minima culpa odio voluptatum eum architecto!
							Repellendus aliquam rerum suscipit ipsum cumque?
						</Typography>
						
				
					</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color="primary" variant="outlined">
						<Work />
					</TimelineDot>
					<TimelineConnector className={classes.secondaryTail} />
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Button
							variant="contained"
							color="primary"
							className={classes.ButtonRequest}
						>
							Position 2021 - Present
						</Button>
						<CardHeader
							avatar={
								<div className={classes.avatarMargin}>
									<Avatar alt="" src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" />
								</div>
							}
							title={
								<div>
									<Typography className={classes.typo1}>
										June 2019 Currently(1 year, 9 months)
									</Typography>
									,
									<Typography className={classes.typo2}>
										Full Stack Developer at Mindism Tech Pvt Ltdd
									</Typography>
								</div>
							}
						/>
						<div className={classes.buttonGroup1}>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
						</div>
						<div className={classes.buttonGroup2}>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
						</div>
						<Typography className={classes.text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
							repudiandae amet reiciendis aperiam mollitia nihil adipisci! Fuga,
							repellendus minima culpa odio voluptatum eum architecto!
							Repellendus aliquam rerum suscipit ipsum cumque?
						</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color="primary" variant="outlined">
						<Work />
					</TimelineDot>
					<TimelineConnector className={classes.secondaryTail} />
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Button
							variant="contained"
							color="primary"
							className={classes.ButtonL}
						>
							Position 2021 - Present
						</Button>
						<CardHeader
							avatar={
								<div className={classes.avatarMargin}>
									<Avatar alt="" src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" />
								</div>
							}
							title={
								<div>
									<Typography className={classes.typo1}>
										June 2019 Currently(1 year, 9 months)
									</Typography>
									,
									<Typography className={classes.typo2}>
										Full Stack Developer at Mindism Tech Pvt Ltdd
									</Typography>
								</div>
							}
						/>
						<div className={classes.buttonGroup1}>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
						</div>
						<div className={classes.buttonGroup2}>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
						</div>
						<Typography className={classes.text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
							repudiandae amet reiciendis aperiam mollitia nihil adipisci! Fuga,
							repellendus minima culpa odio voluptatum eum architecto!
							Repellendus aliquam rerum suscipit ipsum cumque?
						</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color="secondary">
						<Work />
					</TimelineDot>
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Button
							variant="contained"
							color="primary"
							className={classes.ButtonRequest}
						>
							Position 2021 - Present
						</Button>
						<CardHeader
							avatar={
								<div className={classes.avatarMargin}>
									<Avatar alt="" src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" />
								</div>
							}
							title={
								<div>
									<Typography className={classes.typo1}>
										June 2019 Currently(1 year, 9 months)
									</Typography>
									,
									<Typography className={classes.typo2}>
										Full Stack Developer at Mindism Tech Pvt Ltdd
									</Typography>
								</div>
							}
						/>
						<div className={classes.buttonGroup1}>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
						</div>
						<div className={classes.buttonGroup2}>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
							<Button className={classes.button} variant="outlined">
								Node.js
							</Button>
						</div>
						<Typography className={classes.text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
							repudiandae amet reiciendis aperiam mollitia nihil adipisci! Fuga,
							repellendus minima culpa odio voluptatum eum architecto!
							Repellendus aliquam rerum suscipit ipsum cumque?
						</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
