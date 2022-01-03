import { signup, selectUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Link from "next/link";


const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  justifyContent: 'center',
	  alignItems: 'center',
	  height: '100vh',
	  fontFamily: 'Nunito',
	  backgroundImage: `url(${"https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"})`
	},
	appbar: {
	  background: 'none',
	},
	appbarWrapper: {
	  width: '80%',
	  margin: '0 auto',
	},
	appbarTitle: {
	  flexGrow: '1',
	},
	icon: {
	  color: '#fff',
	  fontSize: '2rem',
	},
	colorText: {
	  color: "blue",
	},
	container: {
	  textAlign: 'center',
	},
	title: {
	  color: '#fff',
	  fontSize: '4.5rem',
	},
	goDown: {
	  color: '#5AFF3D',
	  fontSize: '4rem',
	},
  }));


const SuccessForm = () => {

	const classes = useStyles();
    const [checked, setChecked] = useState(false);

	
	
  const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const handleLogout = (e) => {
		e.preventDefault();

		dispatch(signup());
	};

	useEffect(() => {
		setChecked(true);
	  }, []);
	return (
		<div className={classes.root} id="header">
		<AppBar className={classes.appbar} elevation={0}>
		  <Toolbar className={classes.appbarWrapper}>
			
			
		  </Toolbar>
		</AppBar>
  
		<Collapse
		  in={checked}
		  {...(checked ? { timeout: 2000 } : {})}
		  collapsedHeight={50}
		>
		  <div className={classes.container}>
			<h1 className={classes.title}>
			  Thank you <br />
			  For Your <span className={classes.colorText}>Request.</span>
			</h1>
			<Scroll to="place-to-visit" smooth={true}>
			  <Link href="/">
			  <IconButton >
				<ExpandMoreIcon className={classes.goDown}  />
				
			  </IconButton>
			  </Link>
			</Scroll>
		  </div>
		</Collapse>
	  </div>
	);
};

export default SuccessForm;
