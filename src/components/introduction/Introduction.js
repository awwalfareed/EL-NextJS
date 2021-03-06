import React from "react";
import { useStyles } from "./IntroductionStyles.js";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import {
	Business,
	CastForEducation,
	Facebook,
	LinkedIn,
	LocationOn,
	Twitter,
	WhatsApp,
} from "@material-ui/icons";

import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

const Introduction = () => {
	const classes = useStyles();
	return (
		<>
			<Paper className={classes.root} elevation={0}>
				<div className={classes.introMargin}>
					<Typography
						style={{
							marginLeft: 20,
							marginTop: 10,
							fontWeight: 600,
							fontSize: 20,
						}}
					>
						Introduction
					</Typography>
					<Typography style={{ color: "gray", fontSize: 14 }}>
						<Business style={{ marginRight: 10 }} />
						Current Company
					</Typography>
					<Typography style={{ marginLeft: 30, fontSize: 14, fontWeight: 600 }}>
						AwwalTech IT Solution Provider
					</Typography>
					<Typography style={{ color: "gray", fontSize: 14 }}>
						<CastForEducation style={{ marginRight: 10 }} /> Education
					</Typography>
					<div className={classes.timeline}>
						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Typography className={classes.name}>
									The university of Wales
								</Typography>{" "}
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot />
							</TimelineSeparator>
							<TimelineContent>
								<Typography className={classes.name}>
									Bachelor degree in Banking and Finance
								</Typography>
							</TimelineContent>
						</TimelineItem>
					</div>
					<Typography style={{ color: "gray", fontSize: 14 }}>
						<LocationOn style={{ marginRight: 10 }} /> Location
					</Typography>
					<Typography style={{ marginLeft: 30, fontSize: 14, fontWeight: 600 }}>
						Asaka, Andijan, Uzbekistan
					</Typography>
					<div className={classes.socialMedia}>
						<Facebook color="primary" className={classes.social} />
						<Twitter color="primary" className={classes.social} />
						<WhatsApp
							color="primary"
							className={classes.social}
							style={{ color: "primary" }}
						/>
						<LinkedIn color="primary" className={classes.social} />
					</div>
				</div>
			</Paper>
		</>
	);
};

export default Introduction;
