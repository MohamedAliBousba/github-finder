import React, {useEffect, useState} from 'react';
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import RepoInfo from "./RepoInfo";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        padding: "10px",
        margin: "10px 0"
    },
    linkRepo: {
        textDecoration: 'none'
    }
}))


const Repos = ({ reposUrl }) => {
    const classes = useStyles()

    const [latestRepos, setLatestRepos] = useState([])

    useEffect(() => {
        axios.get(`${reposUrl}?client_id=d9308aacf8b204d361fd&client_secret=84969aeef73956f4ec9e8716d1840532802bb81b`)
            .then(res => {
                setLatestRepos(res.data)
            })
            .catch(err => {

            })
    }, [reposUrl])


    if(!latestRepos){
        return <p>Loading...</p>
    }

    let updatedLatestRepos = latestRepos
    if(latestRepos.length > 5){
        updatedLatestRepos = latestRepos.slice(5)
        setLatestRepos(updatedLatestRepos)
    }

    return (
        <Paper elevation={3} className={classes.root}>
            <h2>Latest Repos</h2>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableBody>
                        { latestRepos.map(repo => (
                            <TableRow key={repo.id}>
                                <TableCell scope="row">
                                    <a className={classes.linkRepo} href={`${repo.html_url}`} rel="noopener noreferrer" target='_blank'>{ repo.name }</a>
                                </TableCell>
                                <TableCell scope="row" align="right">
                                    <RepoInfo forks_count={repo.forks_count} watchers_count={repo.watchers_count} stargazers_count={repo.stargazers_count} />
                                </TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default Repos;
