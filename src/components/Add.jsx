import {
	Alert,
	Button,
	Container,
	Fab,
	FormControlLabel,
	FormLabel,
	MenuItem,
	Modal,
	Radio,
	RadioGroup,
	Snackbar,
	TextField,
	Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	fab: {
		position: "fixed !important",
		bottom: 10,
		right: 10,
	},
	container: {
		width: "500px !important",
		height: "550px",
		backgroundColor: "white",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		[theme.breakpoints.down("sm")]: {
			width: "100vw !important",
			height: "100vh !important",
		},
	},
	form: {
		padding: theme.spacing(2),
	},
	item: {
		marginBottom: theme.spacing(3),
	},
}));

const Add = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [openAlert, setOpenAlert] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenAlert(false);
	};

	return (
		<>
			<Tooltip title="Add" onClick={() => setOpen(true)}>
				<Fab color="primary" className={classes.fab}>
					<AddIcon />
				</Fab>
			</Tooltip>
			<Modal open={open} onClose={() => setOpen(false)}>
				<Container className={classes.container}>
					<form className={classes.form}>
						<div className={classes.item}>
							<TextField
								id="outlined-basic"
								label="Title"
								size="small"
								variant="standard"
								style={{ width: "100%" }}
							/>
						</div>
						<div className={classes.item}>
							<TextField
								id="outlined-multiline"
								multiline
								rows={4}
								label="Description"
								placeholder="Tell your story!"
								size="small"
								variant="outlined"
								style={{ width: "100%" }}
							/>
						</div>
						<div className={classes.item}>
							<TextField select label="Visibility" defaultValue="Public">
								<MenuItem value="Public">Public</MenuItem>
								<MenuItem value="Private">Private</MenuItem>
								<MenuItem value="Unlisted">Unlisted</MenuItem>
							</TextField>
						</div>
						<div className={classes.item}>
							<FormLabel id="demo-radio-buttons-group-label">
								Who can comment?
							</FormLabel>
							<RadioGroup>
								<FormControlLabel
									value="Everybody"
									control={<Radio color="secondary" size="small" />}
									label="Everybody"
								/>
								<FormControlLabel
									value="Close Friends"
									control={<Radio color="secondary" size="small" />}
									label="Close Friends"
								/>
								<FormControlLabel
									value="Nobody"
									control={<Radio color="secondary" size="small" />}
									label="Nobody"
								/>
								<FormControlLabel
									value="Custom"
									disabled
									control={<Radio color="secondary" size="small" />}
									label="Custom (Premium accounts)"
								/>
							</RadioGroup>
						</div>

						<div className={classes.item}>
							<Button
								variant="outlined"
								style={{ marginRight: 20 }}
								onClick={() => setOpenAlert(true)}
							>
								Create
							</Button>
							<Button
								variant="outlined"
								color="secondary"
								onClick={() => setOpen(false)}
							>
								Cancel
							</Button>
						</div>
					</form>
				</Container>
			</Modal>
			<Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}>
				<Alert
					onClose={handleClose}
					severity="success"
					variant="filled"
					sx={{ width: "100%" }}
				>
					Post Created Successfully!
				</Alert>
			</Snackbar>
		</>
	);
};

export default Add;
