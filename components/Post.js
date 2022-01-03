import { makeStyles,  Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";



const useStyles = makeStyles((theme)=>({

    card:{
        marginBottom:theme.spacing(5),
        width:"80%",
        marginLeft:100,
        [theme.breakpoints.down("sm")]:{
            width:"100%",
            marginLeft:0,
        },
       
    },

    media:{
        height:400,
        
        [theme.breakpoints.down("sm")]:{
            height:150,
        },
    },

}));

const Post = ()=>{
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image="https://i.ibb.co/c2dd8DV/pic.jpg" title="My Post"/>
                <CardContent>
                    <Typography gutterBottom variant="h5">My first post</Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam iure porro consequatur incidunt excepturi sapiente, corporis distinctio deleniti sed dolores fugiat consectetur, a ab unde id nostrum suscipit possimus.</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Read More</Button>
            </CardActions>
        </Card>
    )
}

export default Post