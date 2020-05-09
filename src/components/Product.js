import React from 'react';
import logo from "../logo.svg";
import 'typeface-roboto';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

import ListSubheader from '@material-ui/core/ListSubheader';
import '../index.css'

import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import productData from './productData'
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 900,
        height: 850,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const productStyles = {
    textAlign: 'center'
}

export default function ProductPage() {
    const classes = useStyles();

    return (
        <div className={classes.root} style={productStyles}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key={"Subheader"} cols={2} style={{height: 'auto'}}>
                    <ListSubheader component={"div"}>Product</ListSubheader>
                </GridListTile>
                {productData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title}/>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>Owner: {tile.owner}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <InfoIcon/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}