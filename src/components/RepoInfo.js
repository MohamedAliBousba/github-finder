import React from 'react';
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    box: {
        width: '20%',
        minWidth: "10%",
        backgroundColor: "red",
        borderRadius: "5px",
        padding: "2px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        margin: "0 3px"
    },
    globalBox: {
        display: "flex",
        alignItems: "center",
        marginBottom: "8px"
    },
    box1: {
        backgroundColor: "blue"
    },
    box2: {
        backgroundColor: "orange"
    },
    box3: {
        backgroundColor: "#ccc"
    }
}))


const RepoInfo = ({ forks_count, watchers_count, stargazers_count }) => {
    const classes = useStyles()

    return (
        <Box className={classes.globalBox}>
            <Box className={clsx(classes.box, classes.box1)}>
                <Typography variant="caption" display="block" gutterBottom>
                    Stars: { stargazers_count }
                </Typography>
            </Box>
            <Box className={clsx(classes.box, classes.box2)}>
                <Typography variant="caption" display="block" gutterBottom>
                    Watchers: { watchers_count }
                </Typography>
            </Box>
            <Box className={clsx(classes.box, classes.box3)}>
                <Typography variant="caption" display="block" gutterBottom>
                    Forks: { forks_count }
                </Typography>
            </Box>
        </Box>
    );
};

export default RepoInfo;
