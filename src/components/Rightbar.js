import {
	makeStyles,
	withStyles,
	Container,
	Typography,
	Link,
	Avatar,
	ImageList,
	ImageListItem,
	Divider,
} from "@material-ui/core";

import { Users } from "../../data";
import Online from "./Online";

const SmallAvatar = withStyles((theme) => ({
	root: {
		width: 22,
		height: 22,
		border: `2px solid ${theme.palette.background.paper}`,
	},
}))(Avatar);

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(15),
		position: "sticky",
		top: 0,
	},
	title: {
		fontSize: 16,
		fontWeight: 500,
		color: "#555",
	},

	link: {
		marginRight: theme.spacing(2),
		color: "#555",
		fontSize: 16,
	},
}));

const Rightbar = () => {
	const classes = useStyles();

	return (
		<Container className={classes.container}>
			<Typography className={classes.title} gutterBottom>
				Online Friends
			</Typography>
			{Users.map((u) => (
				<Online key={u.id} user={u} />
			))}

			<Typography className={classes.title} gutterBottom>
				Galleries
			</Typography>
			<ImageList
				rowHeight={100}
				className={classes.imageList}
				cols={3}
				style={{ marginBottom: 20 }}
			>
				<ImageListItem>
					<img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" />
				</ImageListItem>
				<ImageListItem>
					<img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" />
				</ImageListItem>
				<ImageListItem>
					<img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" />
				</ImageListItem>
				<ImageListItem>
					<img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" />
				</ImageListItem>
			</ImageList>
			<Typography className={classes.title} gutterBottom>
				Categories
			</Typography>
			<Link href="#" className={classes.link} varinat="body2">
				Sports
			</Link>
			<Link href="#" className={classes.link} varinat="body2">
				Tv
			</Link>
			<Divider flexItem style={{ marginBottom: 5 }} />
			<Link href="#" className={classes.link} varinat="body2">
				Movies
			</Link>
			<Link href="#" className={classes.link} varinat="body2">
				Music
			</Link>
		</Container>
	);
};

export default Rightbar;
