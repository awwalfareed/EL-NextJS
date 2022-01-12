import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import {
	Container,
	Typography,
	TextField,
	MenuItem,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Button,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { FormatListNumbered } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "70%",
		height: 500,
		backgroundColor: "white",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: "auto",
		[theme.breakpoints.down("sm")]: {
			width: "100vh",
			height: "100vh",
		},
	},
	form: {
		padding: theme.spacing(2),
	},

	paper: {
		display: "flex",
		border: `1px solid ${theme.palette.divider}`,
		flexWrap: "wrap",
	},
	divider: {
		margin: theme.spacing(1, 0.5),
	},

	item: {
		marginBottom: theme.spacing(3),
	},
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
	grouped: {
		margin: theme.spacing(0.5),
		border: "none",
		"&:not(:first-child)": {
			borderRadius: theme.shape.borderRadius,
		},
		"&:first-child": {
			borderRadius: theme.shape.borderRadius,
		},
	},
}))(ToggleButtonGroup);

const Editor = () => {
	const classes = useStyles();

	return (
		<Container className={classes.container}>
			<form className={classes.form} autoComplete="off">
				<Paper elevation={0} className={classes.paper}>
					<StyledToggleButtonGroup size="small">
						<ToggleButton value="left" aria-label="left aligned">
							<FormatListNumbered />
						</ToggleButton>
						<ToggleButton value="left" aria-label="left aligned">
							<FormatAlignLeftIcon />
						</ToggleButton>
						<ToggleButton value="center" aria-label="centered">
							<FormatAlignCenterIcon />
						</ToggleButton>
						<ToggleButton value="right" aria-label="right aligned">
							<FormatAlignRightIcon />
						</ToggleButton>
						<ToggleButton value="justify" aria-label="justified" disabled>
							<FormatAlignJustifyIcon />
						</ToggleButton>

						<ToggleButton value="bold" aria-label="bold">
							<FormatBoldIcon />
						</ToggleButton>
						<ToggleButton value="italic" aria-label="italic">
							<FormatItalicIcon />
						</ToggleButton>
						<ToggleButton value="underlined" aria-label="underlined">
							<FormatUnderlinedIcon />
						</ToggleButton>
						<ToggleButton value="color" aria-label="color" disabled>
							<FormatColorFillIcon />
							<ArrowDropDownIcon />
						</ToggleButton>
					</StyledToggleButtonGroup>
				</Paper>

				<div className={classes.item}>
					<TextField
						id="outlined-multiline-static"
						multiline
						rows={12}
						placeholder="Write your recommendation"
						variant="outlined"
						style={{ width: "100%" }}
					/>
				</div>

				<div className={classes.item}>
					<Button
						variant="outlined"
						color="primary"
						style={{ marginRight: 29, marginLeft: "83%" }}
						onClick={() => setOpenAlert(true)}
					>
						Send
					</Button>
					<Button
						variant="outlined"
						color="error"
						onClick={() => setOpen(false)}
					>
						Cancell
					</Button>
				</div>
			</form>
		</Container>
	);
};

export default Editor;
