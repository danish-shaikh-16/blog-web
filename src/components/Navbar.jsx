import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import { Avatar, Badge, InputBase, Toolbar, Typography } from "@mui/material";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import { alpha } from "@mui/material/styles";
import Search from "@mui/icons-material/Search";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	logoLg: {
		display: "none",
		cursor: "pointer",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	logoSm: {
		display: "none",
		cursor: "pointer",
		[theme.breakpoints.down("sm")]: {
			display: "block",
		},
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	search: {
		display: "flex",
		alignItems: "center",
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		borderRadius: theme.shape.borderRadius,
		width: "50%",
		padding: "0 10px",
		[theme.breakpoints.down("sm")]: {
			display: (props) => (props.open ? "flex" : "none"),
		},
	},
	input: {
		color: "white !important",
		marginLeft: theme.spacing(2),
	},
	searchButton: {
		marginRight: theme.spacing(2),
		cursor: "pointer",
		[theme.breakpoints.up("sm")]: {
			display: "none !important",
		},
	},
	icons: {
		display: "flex",
		[theme.breakpoints.down("sm")]: {
			display: (props) => (props.open ? "none" : "flex"),
		},
		alignItems: "center",
	},
	badge: {
		marginRight: theme.spacing(2),
	},
	cancel: {
		cursor: "pointer",
		[theme.breakpoints.up("sm")]: {
			display: "none !important",
		},
	},
}));

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const classes = useStyles({ open });
	return (
		<>
			<AppBar position="fixed">
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" className={classes.logoLg}>
						D Shaikh
					</Typography>
					<Typography variant="h6" className={classes.logoSm}>
						DS
					</Typography>
					<div className={classes.search}>
						<SearchIcon />
						<InputBase placeholder="Search" className={classes.input} />
						<CancelSharpIcon
							className={classes.cancel}
							onClick={() => setOpen(false)}
						/>
					</div>
					<div className={classes.icons}>
						<Search
							className={classes.searchButton}
							onClick={() => setOpen(true)}
						/>
						<Badge badgeContent={4} color="secondary" className={classes.badge}>
							<MailIcon />
						</Badge>
						<Badge badgeContent={2} color="secondary" className={classes.badge}>
							<NotificationsIcon />
						</Badge>
						<Avatar alt="Profile Pic" src="./profile-pic.jpg" />
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
