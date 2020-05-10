import React from 'react';
import './App.css';

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";

import Typography from "@material-ui/core/Typography";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <Link to="/">
                            <Typography variant={'h5'} component={'h5'}>
                                Home
                            </Typography>
                        </Link>
                        <Link to="/gallery">
                            <Typography variant={'h5'} component={'h5'}>
                                Product Gallery
                            </Typography>
                        </Link>
                    </nav>
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
