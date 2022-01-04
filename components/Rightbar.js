import {
	makeStyles,
	Container,
	Typography,
	Link,
	Avatar,
	ImageList,
	ImageListItem,
	Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
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

			<AvatarGroup max={4} style={{ marginBottom: 20 }}>
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
				<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
				<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
				<Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
				<Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
			</AvatarGroup>
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
				<ImageListItem>
					<img src="https://v4.mui.com/static/images/image-list/morning.jpg" />
				</ImageListItem>
				<ImageListItem>
					<img src="https://v4.mui.com/static/images/image-list/morning.jpg" />
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
