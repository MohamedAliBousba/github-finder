import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "10px 0",
        width: "90%",
        padding: "15px"
    },
    box: {
        width: '20%',
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
    },
    image: {
        maxWidth: "180px",
        maxHeight: "180px"
    },
    linkGithub: {
        textDecoration: 'none'
    }
}))

const Profile = ({user}) => {
    const classes = useStyles()

    if (!user) {
        return <p>Loading...</p>
    }

    return (
        <Paper elevation={3} className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <img className={classes.image} src={`${user.avatar_url}`} alt=""/>
                    <br/>
                    <a href={`${user.html_url}`} className={classes.linkGithub}>
                        <Button style={{borderRadius: "12px"}} variant="contained" color="primary">
                            View Profile
                        </Button>
                    </a>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box className={classes.globalBox}>
                        <Box className={clsx(classes.box, classes.box1)}>
                            <Typography className={classes.innerBox} variant="caption" display="block" gutterBottom>
                                public repos: {user.public_repos}
                            </Typography>
                        </Box>
                        <Box className={clsx(classes.box, classes.box2)}>
                            <Typography className={classes.innerBox} variant="caption" display="block" gutterBottom>
                                public gists: {user.public_gists}
                            </Typography>
                        </Box>
                        <Box className={clsx(classes.box, classes.box3)}>
                            <Typography className={classes.innerBox} variant="caption" display="block" gutterBottom>
                                followers: {user.followers}
                            </Typography>
                        </Box>
                        <Box className={clsx(classes.box, classes.box4)}>
                            <Typography className={classes.innerBox} variant="caption" display="block" gutterBottom>
                                following: {user.following}
                            </Typography>
                        </Box>
                    </Box>

                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell scope="row">
                                        Company: {user.company ? user.company : "No Company"}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        Website/blog: {user.blog}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        Location: {user.location}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        Member
                                        Since: {user.created_at ? user.created_at.substring(0, 10) : user.created_at}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Profile;
