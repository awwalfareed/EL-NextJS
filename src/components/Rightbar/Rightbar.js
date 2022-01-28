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
import { useStyles } from "./RightbarStyles.js";
import {
	Business,
	CastForEducation,
	LocationOff,
	LocationOn,
} from "@material-ui/icons";

import { Users } from "../../../data";
import Online from "../Online/Online";

const Rightbar = ({ profile }) => {
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
