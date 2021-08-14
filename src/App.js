import React from 'react';
import './App.css';

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";

import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import {ChevronLeft} from "@material-ui/icons";
import HomeIcon from '@material-ui/icons/Home'
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }
}));

function App() {
    const classes = useStyles();

    const [pageTitle, setPageTitle] = React.useState("Home Page");
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawer = () => {
        drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true);
    };

    return (
        <div>
            <Router>
                <div>
                    <AppBar className={classes.appBar}>
                        <Toolbar variant={"dense"}>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawer}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                {pageTitle}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={drawerOpen}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawer}>
                                <ChevronLeft/>
                                <Typography>
                                    Close
                                </Typography>
                            </IconButton>
                        </div>
                        <Divider/>

                        <List>
                            <Link to="/">
                                <ListItem button key={"Home"}>
                                    <ListItemIcon>
                                        <HomeIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={"Home"}/>
                                </ListItem>
                            </Link>
                            <Link to="/gallery">
                                <ListItem button key={"Gallery"}>
                                    <ListItemIcon>
                                        <PhotoAlbumIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={"Gallery"}/>
                                </ListItem>
                            </Link>
                        </List>
                    </Drawer>
                    <Divider/>
                    <Switch>
                        <Route path="/gallery">
                            <ProductPage/>
                        </Route>
                        <Route path="/">
                            <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
