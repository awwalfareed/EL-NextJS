import WorkIcon from "@material-ui/icons/Work";

import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import CodeIcon from "@material-ui/icons/Code";

import CastForEducation from "@material-ui/icons/CastForEducation";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import AssessmentIcon from "@material-ui/icons/Assessment";

import Star from "@material-ui/icons/Star";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles((theme)=>({
	

	rootL: {
		display: "none",

		[theme.breakpoints.up("sm")]: {
			width: 900,
			display: "flex",
			
			
		},
	},

	rootS: {
		display: "none",
		
		

		[theme.breakpoints.up("sm")]: {
			display: "none",
			
		},
	},
}));

export default function SimpleBottomNavigation() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	return (
		<>
		<BottomNavigation
		
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
			className={classes.rootL}
		>
			<BottomNavigationAction label="Recents" icon={<WorkIcon />} />
			<BottomNavigationAction label="Favorites" icon={<SpeakerNotesIcon />} />
			<BottomNavigationAction
				label="Nearby"
				icon={<SettingsInputComponentIcon />}
			/>
			<BottomNavigationAction label="Nearby" icon={<EqualizerIcon />} />
			<BottomNavigationAction label="Nearby" icon={<CodeIcon />} />
			<BottomNavigationAction label="Nearby" icon={<CastForEducation />} />
			<BottomNavigationAction label="Nearby" icon={<CardMembershipIcon />} />
			<BottomNavigationAction label="Nearby" icon={<AssessmentIcon />} />
			<BottomNavigationAction label="Nearby" icon={<Star />} />
		</BottomNavigation>

		<BottomNavigation
		
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
			className={classes.rootS}
		>
			<BottomNavigationAction label="Recents" icon={<WorkIcon />} />
			<BottomNavigationAction label="Favorites" icon={<SpeakerNotesIcon />} />
			<BottomNavigationAction
				label="Nearby"
				icon={<SettingsInputComponentIcon />}
			/>
			<BottomNavigationAction label="Nearby" icon={<EqualizerIcon />} />
			<BottomNavigationAction label="Nearby" icon={<CodeIcon />} />
			<BottomNavigationAction label="Nearby" icon={<CastForEducation />} />
			<BottomNavigationAction label="Nearby" icon={<CardMembershipIcon />} />
			<BottomNavigationAction label="Nearby" icon={<AssessmentIcon />} />
			<BottomNavigationAction label="Nearby" icon={<Star />} />
		</BottomNavigation>

	
		</>
	);
}
