import { Box } from "@material-ui/core";

const Menu = () => {
	return (
		<Box
			display="flex"
			flexDirection="row"
			justifyContent="center"
			style={{ fontSize: 16, fontWeight: 500, color: "gray" }}
		>
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
	);
};

export default Menu;
