import React from 'react';
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import {fade} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        padding: "10px",
        margin: "10px 0"
    },


    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        // backgroundColor: "#2196f3",
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Search = (props) => {
    const classes = useStyles()

    return (
        <Paper elevation={3} className={classes.root}>
            <h2>Search Github Users</h2>
            <Typography variant="subtitle1" style={{ color: "#9e9e9e" }} gutterBottom>Enter a username to fetch user profile info and repos.</Typography>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={e => props.setUserSearch(e.target.value)}
                />
            </div>
        </Paper>
    );
};

export default Search;
