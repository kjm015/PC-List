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

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

function App() {
    const classes = useStyles();

    const [pageTitle, setPageTitle] = React.useState("Home Page");

    return (
        <div>
            <Router>
                <div>
                    <AppBar className={classes.appBar}>
                        <Toolbar variant={"dense"}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                {pageTitle}
                            </Typography>

                            <Link to="/">
                                <Typography variant={'h5'} component={'h5'} >
                                    Home
                                </Typography>
                            </Link>
                            <Link to="/gallery" >
                                <Typography variant={'h5'} component={'h5'}>
                                    Product Gallery
                                </Typography>
                            </Link>
                        </Toolbar>
                    </AppBar>
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
