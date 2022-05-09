import {
	Avatar,
	AvatarGroup,
	Container,
	ImageList,
	ImageListItem,
	Link,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

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
	avatars: {
		justifyContent: "flex-end !important",
	},
	imageList: {},
	link: {
		marginRight: `${theme.spacing(2)} !important`,
		color: "#555 !important",
		fontSize: "18 important",
	},
}));

const Rightbar = () => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<Typography className={classes.title} gutterBottom>
				Online Friends
			</Typography>
			<AvatarGroup max={6} className={classes.avatars}>
				<Avatar
					alt="Remy Sharp"
					src="https://mui.com/static/images/avatar/1.jpg"
				/>
				<Avatar
					alt="Travis Howard"
					src="https://mui.com/static/images/avatar/2.jpg"
				/>
				<Avatar
					alt="Cindy Baker"
					src="https://mui.com/static/images/avatar/3.jpg"
				/>
				<Avatar
					alt="Agnes Walker"
					src="https://mui.com/static/images/avatar/4.jpg"
				/>
				<Avatar
					alt="Trevor Henderson"
					src="https://mui.com/static/images/avatar/5.jpg"
				/>
				<Avatar
					alt="Trevor Henderson"
					src="https://mui.com/static/images/avatar/6.jpg"
				/>
				<Avatar
					alt="Trevor Henderson"
					src="https://mui.com/static/images/avatar/7.jpg"
				/>
				<Avatar
					alt="Trevor Henderson"
					src="https://mui.com/static/images/avatar/8.jpg"
				/>
			</AvatarGroup>
			<Typography
				className={classes.title}
				gutterBottom
				style={{ marginTop: 10 }}
			>
				Gallery
			</Typography>
			<ImageList className={classes.imageList} cols={3} rowHeight={110}>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<img
							src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
							srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
							alt={item.title}
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
			<Typography
				className={classes.title}
				gutterBottom
				style={{ marginTop: 10 }}
			>
				Categories
			</Typography>
			<Link href="#" underline="hover" className={classes.link} variant="body2">
				Sport
			</Link>
			<Link href="#" underline="hover" className={classes.link} variant="body2">
				Food
			</Link>
			<Link href="#" underline="hover" className={classes.link} variant="body2">
				Movies
			</Link>
			<Link href="#" underline="hover" className={classes.link} variant="body2">
				Science
			</Link>
		</Container>
	);
};

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
	},
	{
		img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
	},
	{
		img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
		title: "Fern",
	},
	{
		img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
		title: "Mushrooms",
	},
	{
		img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
		title: "Tomato basil",
	},
	{
		img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
		title: "Sea star",
	},
	{
		img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
		title: "Bike",
	},
];

export default Rightbar;
