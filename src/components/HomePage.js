import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: theme.backgroundColor
    },
    image: {
        justifyContent: 'center',
        display: 'flex',
    }
}));

export default function HomePage() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <Typography component={"h2"} variant={"h2"}>
                    AKULA Computing Systems
                </Typography>
            </div>
            <Divider/>
            <div className={classes.image}>
                <img src={'/static/akula-prototype-logo.png'} alt={'logo'}/>
            </div>
        </div>
    );
}