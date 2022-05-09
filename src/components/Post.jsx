import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
	},
	card: {
		marginBottom: theme.spacing(5),
	},
	media: {
		height: "250px",
		[theme.breakpoints.down("sm")]: {
			height: "150px",
		},
	},
}));

const Post = () => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					component="img"
					className={classes.media}
					image="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					title="My post"
					alt="My post"
				/>

				<CardContent>
					<Typography gutterBottom variant="h5">
						My First Post
					</Typography>
					<Typography variant="body2">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
						itaque nobis quibusdam aliquid, modi excepturi illo. Vel, ducimus
						vitae quisquam corporis consequuntur inventore laboriosam beatae
						accusamus ipsam amet sit provident? Lorem, ipsum dolor sit amet
						consectetur adipisicing elit.
					</Typography>
				</CardContent>
			</CardActionArea>

			<CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
