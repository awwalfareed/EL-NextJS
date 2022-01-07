import { TextField } from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	textField: {
		[`& fieldset`]: { borderRadius: 30 },

		[theme.breakpoints.down("sm")]: {
			size: "small",
		},
	},
}));

const classes = useStyles();
Name *
(
	<TextField
		hiddenLabel
		placeholder="Name"
		variant="outlined"
		margin="normal"
		required
		fullWidth
		id="name"
		name="name"
		autoComplete="name"
		autoFocus
		className={classes.textField}
		size="normal"
	/>
);
Email *
(
	<TextField
		hiddenLabel
		variant="outlined"
		margin="normal"
		required
		fullWidth
		id="email"
		placeholder="Email Address"
		name="email"
		autoComplete="email"
		autoFocus
		className={classes.textField}
		size="normal"
	/>
);

Password *
(
	<TextField
		hiddenLabel
		variant="outlined"
		margin="normal"
		required
		fullWidth
		name="password"
		placeholder="Password"
		type="password"
		id="password"
		autoComplete="current-password"
		className={classes.textField}
		size="normal"
	/>
);
