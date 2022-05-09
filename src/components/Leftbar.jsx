import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ListIcon from "@mui/icons-material/List";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StoreIcon from "@mui/icons-material/Store";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		color: "white",
		paddingTop: theme.spacing(10),
		backgroundColor: theme.palette.primary.main,
		[theme.breakpoints.up("sm")]: {
			backgroundColor: "white",
			color: "#555",
			border: "1px solid #ece7e7",
		},
		position: "sticky",
		top: 0,
	},
	item: {
		display: "flex",
		alignItems: "center",
		marginBottom: theme.spacing(4),
		[theme.breakpoints.up("sm")]: {
			marginBottom: theme.spacing(3),
			cursor: "pointer",
		},
	},
	icon: {
		marginRight: theme.spacing(1),
		[theme.breakpoints.up("sm")]: {
			fontSize: "18px !important",
		},
	},
	text: {
		fontWeight: 500 + " !important",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
}));

const Leftbar = () => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<div className={classes.item}>
				<HomeIcon className={classes.icon} />
				<Typography className={classes.text}>Home</Typography>
			</div>
			<div className={classes.item}>
				<PeopleIcon className={classes.icon} />
				<Typography className={classes.text}>Friends</Typography>
			</div>
			<div className={classes.item}>
				<ListIcon className={classes.icon} />
				<Typography className={classes.text}>Lists</Typography>
			</div>
			<div className={classes.item}>
				<PhotoCameraIcon className={classes.icon} />
				<Typography className={classes.text}>Camera</Typography>
			</div>
			<div className={classes.item}>
				<PlayCircleIcon className={classes.icon} />
				<Typography className={classes.text}>Videos</Typography>
			</div>
			<div className={classes.item}>
				<PhoneAndroidIcon className={classes.icon} />
				<Typography className={classes.text}>Apps</Typography>
			</div>
			<div className={classes.item}>
				<BookmarkIcon className={classes.icon} />
				<Typography className={classes.text}>Collections</Typography>
			</div>
			<div className={classes.item}>
				<StoreIcon className={classes.icon} />
				<Typography className={classes.text}>Market Place</Typography>
			</div>
			<div className={classes.item}>
				<SettingsIcon className={classes.icon} />
				<Typography className={classes.text}>Settings</Typography>
			</div>
			<div className={classes.item}>
				<LogoutIcon className={classes.icon} />
				<Typography className={classes.text}>Logout</Typography>
			</div>
		</Container>
	);
};

export default Leftbar;
