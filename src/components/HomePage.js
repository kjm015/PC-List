import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import '../index.css'

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
    },
    grid: {
        flexGrow: 2
    }
}));

export default function HomePage() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3} justify={'center'} className={classes.grid}>
                <Grid item xs={12} className={classes.image}>
                    <img src={'/static/akula-prototype-logo.png'} alt={'logo'}/>
                </Grid>
                <Divider/>
                <Grid item xs={12} className={classes.root}>
                    <Typography component={'h3'} variant={'h3'}>
                        About Us
                    </Typography>
                </Grid>
                <Divider/>
                <Grid item xs={12} className={classes.root}>
                    <Typography component={'p'} variant={'p'}>
                        AKULA is a company devoted to creating custom-built performance gaming and workstation
                        computers. If you're in need of a PC, look no further!
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}