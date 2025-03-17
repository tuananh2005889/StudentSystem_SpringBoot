import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Appbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton>
				<Typography varient="h6" sx={{ flexGrow: 1 }}>
					Student Management system
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Appbar;
