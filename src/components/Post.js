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
import ShareForm from "./ShareForm";
import axios from "axios";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
	loadButton: {
		width: "40%",
		marginLeft: "30%",
		[theme.breakpoints.down("sm")]: {
			width: "80%",
			marginLeft: "10%",
		},
	},
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
	const [items, setItems] = useState(4);

	const SliceItem = list.slice(0, items);

	const loadMore = () => {
		setItems(items + 4);
	};

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
		<>
			<Card className={classes.card}>
				{SliceItem.map((item) => (
					<CardActionArea key={item.id}>
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
					<ShareForm />
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>

			<Button
				variant="contained"
				color="primary"
				href="#contained-buttons"
				onClick={() => loadMore()}
				className={classes.loadButton}
			>
				Load more
			</Button>
		</>
	);
};

export default Post;
