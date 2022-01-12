import {
	Button,
	Container,
	Modal,
	Snackbar,
	TextField,
	Tooltip,
} from "@material-ui/core";

import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { FormatListNumbered, Share } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "60%",
		height: 600,
		backgroundColor: "white",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: "auto",
		[theme.breakpoints.down("sm")]: {
			width: "80%",
			height: "60%",
		},
	},
	form: {
		padding: theme.spacing(0),
	},

	buttonShare: {
		[theme.breakpoints.down("sm")]: {
			marginTop: "-2%",
		},
	},

	paper: {
		display: "flex",
		border: `1px solid ${theme.palette.divider}`,
		flexWrap: "wrap",
		marginTop: "5%",
	},
	divider: {
		margin: theme.spacing(1, 0.5),
	},

	item: {
		marginBottom: theme.spacing(3),
	},
}));

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const TextEditor = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const [openAlert, setOpenAlert] = useState(false);

	const [alignment, setAlignment] = useState("left");
	const [formats, setFormats] = useState(() => ["italic"]);

	const handleFormat = (event, newFormats) => {
		setFormats(newFormats);
	};

	const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenAlert(false);
	};

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

	return (
		<>
			<Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
				<Button color="primary">
					<Share />
				</Button>
			</Tooltip>
			<Modal open={open}>
				<Container className={classes.container}>
					<form className={classes.form} autoComplete="off">
						<Paper elevation={0} className={classes.paper}>
							<StyledToggleButtonGroup
								size="small"
								value={alignment}
								exclusive
								onChange={handleAlignment}
								aria-label="text aligment"
							>
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
							</StyledToggleButtonGroup>
							<StyledToggleButtonGroup
								size="small"
								value={formats}
								onChange={handleFormat}
								aria-label="text formatting"
							>
								<ToggleButton value="bold" aria-label="bold" id="bold-btn">
									<FormatBoldIcon />
								</ToggleButton>
								<ToggleButton
									value="italic"
									aria-label="italic"
									id="italic-btn"
								>
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
								rows={10}
								placeholder="Write your recommendation"
								variant="outlined"
								size="small"
								className={classes.textArea}
								style={{ width: "100%" }}
							/>
						</div>
						<div className={classes.item}>
							<Button
								variant="outlined"
								color="primary"
								style={{ marginRight: 20 }}
								onClick={() => setOpenAlert(true)}
								className={classes.buttonShare}
							>
								Share
							</Button>
							<Button
								variant="outlined"
								color="error"
								onClick={() => setOpen(false)}
								className={classes.buttonShare}
							>
								Cancell
							</Button>
						</div>
					</form>
				</Container>
			</Modal>
			<Snackbar
				open={openAlert}
				autoHideDuration={4000}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			>
				<Alert onClose={handleClose} severity="success">
					This is a success message!
				</Alert>
			</Snackbar>
		</>
	);
};

export default TextEditor;
