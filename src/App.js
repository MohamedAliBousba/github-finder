import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios'

import Alert from '@material-ui/lab/Alert';

import Container from "@material-ui/core/Container";
import Search from "./components/Search";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Profile from "./components/Profile";
import Repos from "./components/Repos";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
}));

function App() {
    const classes = useStyles()

    const [userSearch, setUserSearch] = useState('')
    const [selectedUser, setSelectedUser] = useState({})

    const [showMsg, setShowMsg] = useState(true)

    setTimeout(() => {
        setShowMsg(false)
    }, 15000)

    useEffect(() => {
        axios.get(`https://api.github.com/users/${userSearch}?client_id=d9308aacf8b204d361fd&client_secret=84969aeef73956f4ec9e8716d1840532802bb81b`)
            .then(res => {
                setSelectedUser(res.data)
            })
            .catch(err => {

            })
    }, [userSearch])

    if(!selectedUser){
        return <p>Loading...</p>
    }

    return (
        <Container className={classes.root}>
            <h2>Github Finder</h2>
            { showMsg && <Alert severity="warning">The app may broke at some time, Github API limits requests number per hour and per day  — The problem is not in the app itself!</Alert> }
            <Search setUserSearch={setUserSearch} />
            <Profile user={selectedUser} />
            { selectedUser.repos_url && <Repos reposUrl={selectedUser.repos_url}/> }
        </Container>
    );
}

export default App;
