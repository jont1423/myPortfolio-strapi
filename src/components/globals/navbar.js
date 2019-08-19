
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Chat from '@material-ui/icons/Chat';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import BarChart from '@material-ui/icons/BarChart'
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import NotesIcon from '@material-ui/icons/Notes';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "gatsby"


const drawerWidth = 80;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      opacity: "0",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: "transparent",
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
    	<div style={{height:"25vh", background:"RGBA(63,40,79,0.4)"}}></div>
    	<div style={{height:"50vh", background:"RGBA(90,90,90,0.4)"}}>
	      	<Grid
	  			container
	  			direction="column"
	  			
	 			alignItems="center"
				>
				<List style={{marginTop:"7vh"}}>
	          		<Grid item>
	          			<ListItem button component={Link} to="/" style={{ top: 10, left: 10, width: "100%", height: 48, }}>
		            		<ListItemIcon> 
			            		<HomeIcon /> 
		            		</ListItemIcon>
	            		</ListItem>
	            	</Grid>
	            	<Grid item>
	          			<ListItem button component={Link} to="/projects" style={{ top: 10, left: 10, width: "100%", height: 48 }}>
		            		<ListItemIcon> 
			            		<EyeIcon /> 
		            		</ListItemIcon>
	            		</ListItem>
	            	</Grid>
	            	<Grid item>
	          			<ListItem button style={{ top: 10, left: 10, width: "100%", height: 48 }}>
		            		<ListItemIcon> 
			            		<BarChart /> 
		            		</ListItemIcon>
	            		</ListItem>
	            	</Grid>
	            	<Grid item>
	          			<ListItem button style={{ top: 10, left: 10, width: "100%", height: 48 }}>
		            		<ListItemIcon> 
			            		<Chat /> 
		            		</ListItemIcon>
	            		</ListItem>
	            	</Grid>
	            	<Grid item>
	          			<ListItem button style={{ top: 10, left: 10, width: "100%", height: 48 }}>
		            		<ListItemIcon> 
			            		<NotesIcon /> 
		            		</ListItemIcon>
	            		</ListItem>
	            	</Grid>
	          	</List>
	          </Grid>
          </div>
          <div style={{height:"25vh", background:"RGBA(63,40,79,0.4)"}}></div>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;