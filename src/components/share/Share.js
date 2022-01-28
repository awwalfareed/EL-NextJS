import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./ShareStyles.js";
import { Avatar, CardActions, IconButton, TextField } from "@material-ui/core";
import { Description, LocationOn, PhotoLibrary } from "@material-ui/icons";

export default function ComplexGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item>
						<Avatar src="/assets/person/1.jpeg" className={classes.small} />
					</Grid>

					<Grid item xs>
						<TextField
							id="outlined-basic"
							label="Outlined"
							variant="outlined"
							className={classes.input}
							size="small"
						/>
						<div className={classes.icons}>
							<PhotoLibrary
								style={{ color: "red" }}
								className={classes.photo}
							/>
							Photo/Video
							<Description
								style={{ color: "blue" }}
								className={classes.photo}
							/>
							Document
							<LocationOn
								style={{ color: "green" }}
								className={classes.photo}
							/>
							Checking
						</div>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
