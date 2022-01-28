import {
	AppBar,
	Avatar,
	Badge,
	InputBase,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { Cancel, Search } from "@material-ui/icons";
import { useStyles } from "./NavbarStyles.js";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const classes = useStyles({ open });
	return (
		<AppBar position="fixed">
			<Toolbar className={classes.toolbar}>
				<Typography variant="h6" className={classes.logoLg}>
					truetn.com
				</Typography>
				<Typography variant="h6" className={classes.logoSm}>
					True TN
				</Typography>
				<div className={classes.search}>
					<Search />
					<InputBase placeholder="Search..." className={classes.input} />
					<Cancel className={classes.cancel} onClick={() => setOpen(false)} />
				</div>
				<div className={classes.icons}>
					<Search
						className={classes.searchButton}
						onClick={() => setOpen(true)}
					/>
					<Badge badgeContent={4} color="error" className={classes.badge}>
						<MailIcon />
					</Badge>
					<Badge badgeContent={2} color="error" className={classes.badge}>
						<NotificationsIcon />
					</Badge>
					<Avatar
						alt="Remy Sharp"
						src="https://i.ibb.co/8sT76XN/pexels-tima-miroshnichenko-7567588.jpg"
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
