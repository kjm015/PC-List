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
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.backgroundColor,
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
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const productStyles = {
    textAlign: 'center'
}

export default function ProductPage() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [specs, changeSpecs] = React.useState({cpu: 'unknown', gpu: 'unknown'});

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
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title}/>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>Owner: {tile.owner}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}
                                            onClick={() => {
                                                changeSpecs(tile.specs)
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
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            System Specifications
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Dialog>
        </div>
    );
}