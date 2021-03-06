import React from 'react';
import 'typeface-roboto';
import {makeStyles} from '@material-ui/core/styles';

import ListSubheader from '@material-ui/core/ListSubheader';
import '../index.css'
import GridList from "@material-ui/core/GridList";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import productData from './ProductData'
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.backgroundColor,
    },
    grid: {
        flexGrow: 1
    },
    gridList: {
        width: 'auto',
        height: 'auto',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    appBar: {
        position: 'relative'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1
    },
    dialog: {
        alignContent: "center"
    },
    card: {
        maxWidth: "100%"
    },
    media: {
        height: "100%"
    },
    image: {
        maxWidth: "100%",
        maxHeight: "100%"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const productStyles = {
    textAlign: 'center'
}

const defaultBuild = {
    title: 'PC',
    owner: 'Someone',
    cols: 1,
    featured: false,
    specs: {
        cpu: 'unknown',
        gpu: 'unknown',
        motherboard: 'unknown',
        ram: 'unknown',
        cooler: 'unknown',
        case: 'unknown'
    },
    images: [
        'logo512.png'
    ]
}

export default function ProductPage() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [currentBuild, changeCurrentBuild] = React.useState(defaultBuild);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root} style={productStyles}>
            <GridList cellHeight={500} className={classes.gridList}>
                <GridListTile key={"Subheader"} cols={2} style={{height: 'auto'}}>
                    <ListSubheader component={"div"}>
                        Computers
                    </ListSubheader>
                </GridListTile>
                {productData.map((tile) => (
                    <GridListTile key={tile.images[0]}>
                        <img src={tile.images[0]} alt={tile.title}/>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>Owner: {tile.owner}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}
                                            onClick={() => {
                                                changeCurrentBuild(tile)
                                                handleClickOpen();
                                            }}>
                                    <InfoIcon/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>

            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                        <Typography variant="h5" className={classes.title}>
                            System Specifications
                            for {currentBuild.owner}{currentBuild.owner[currentBuild.owner.length - 1] === 's' ? "'" : "'s"} "{currentBuild.title}"
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem>
                        <ListItemText primary="CPU" secondary={currentBuild.specs.cpu}/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary="GPU" secondary={currentBuild.specs.gpu}/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary="Motherboard" secondary={currentBuild.specs.motherboard}/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary="CPU Cooler" secondary={currentBuild.specs.cooler}/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary="RAM Configuration" secondary={currentBuild.specs.ram}/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary="Case" secondary={currentBuild.specs.case}/>
                    </ListItem>
                    <Divider/>

                    <Card className={classes.card}>
                        <div>
                            <CardMedia className={classes.media} title={currentBuild.title}>
                                <Grid container spacing={1} justify={'center'}
                                      className={classes.grid}>
                                    {currentBuild.images.map(image => {
                                        return (
                                            <Grid item xs={6}>
                                                <img src={image} alt={"?"} className={classes.image}/>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </CardMedia>
                        </div>
                    </Card>
                </List>
            </Dialog>
        </div>
    );
}