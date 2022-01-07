import {
	makeStyles,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@material-ui/core";

import axios from "axios";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
	card: {
		marginBottom: theme.spacing(5),
		width: "80%",
		marginLeft: 100,
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			marginLeft: 0,
		},
	},

	media: {
		height: 400,

		[theme.breakpoints.down("sm")]: {
			height: 150,
		},
	},
}));

const Post = () => {
	const classes = useStyles();

	const [list, setList] = useState([]);

	useEffect(() => {
		axios({ url: "http://jsonplaceholder.typicode.com/photos" })
			.then((response) => {
				setList(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [setList]);
	return (
		<Card className={classes.card}>
			{list.map((item) => (
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={item.url}
						title="My Post"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5">
							{item.albumId}
						</Typography>
						<Typography variant="body2">{item.title}</Typography>
					</CardContent>
				</CardActionArea>
			))}
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
