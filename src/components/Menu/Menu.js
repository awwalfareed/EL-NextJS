import { Box } from "@material-ui/core";
import { useStyles } from "./MenuStyles.js";
import CssBaseline from "@material-ui/core/CssBaseline";

const defaultProps = {};
const Menu = () => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<Box className={classes.boxLg} {...defaultProps} border={0}>
				<Box order={1} p={1} m={1}>
					Home
				</Box>
				<Box order={2} p={1} m={1}>
					About
				</Box>
				<Box order={2} p={1} m={1}>
					Experience Story
				</Box>
				<Box order={3} p={1} m={1}>
					Skills
				</Box>
				<Box order={4} p={1} m={1}>
					Projects
				</Box>
				<Box order={5} p={1} m={1}>
					Courses
				</Box>
				<Box order={6} p={1} m={1}>
					Features
				</Box>
				<Box order={7} p={1} m={1}>
					Share
				</Box>
			</Box>
			<Box sx={{ maxWidth: 340 }} className={classes.boxSm}>
				<Box p={1}>About Feature</Box>
				<Box p={1}>Home Skills</Box>
				<Box p={1}>Experience Share</Box>
				<Box p={1}>Story Projects</Box>
			</Box>
		</>
	);
};

export default Menu;
