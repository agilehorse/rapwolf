import Button from "@material-ui/core/Button";
import WhiteWolf from "../resources/whiteWolf.png";
import BlackWolf from "../resources/blackWolf.png";
import {Typography} from "@material-ui/core";
import {Route, useHistory} from "react-router-dom";
import Player from "./Player";
import KanyeRest from "./KanyeRest";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Info from "./Info";
import Api from "./Api";
import Text from "./Text";

export default function Main() {

    const classes = useStyles();
    const history = useHistory();
    const [isLogoWhite, setIsLogoWhite] = useState(true);

    return (
        <div className={classes.app}>
            <header className={classes.headerRow}>
                <div className={classes.header}>
                    <div className={classes.menu}>
                        <div className={classes.headerColumn}>
                            <Button
                                className={window.location.pathname === '/api' ? classes.selectedButton : classes.wolfButton}
                                onClick={() => history.push("/api")}
                            >
                                Api
                            </Button>
                            <Button
                                className={window.location.pathname === '/text' ? classes.selectedButton : classes.wolfButton}
                                onClick={() => history.push('/text')}
                            >
                                Text
                            </Button>
                        </div>
                        <div className={classes.logoColumn} onClick={() => history.push('/info')}
                             onMouseOver={() => setIsLogoWhite(false)} onMouseOut={() => setIsLogoWhite(true)}>
                            <img src={isLogoWhite ? WhiteWolf : BlackWolf} className={classes.appLogo} alt="logo"/>
                            <Typography className={classes.heading}>RAP WOLF</Typography>
                        </div>
                        <div className={classes.headerColumn}>
                            <Button
                                className={window.location.pathname === '/player' ? classes.selectedButton : classes.wolfButton}
                                onClick={() => history.push('/player')}
                            >
                                Player
                            </Button>
                            <Button
                                className={window.location.pathname === '/kanye' ? classes.selectedButton : classes.wolfButton}
                                onClick={() => history.push('/kanye')}
                            >
                                Kanye
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <Route path="/api">
                <Api/>
            </Route>
            <Route path="/text">
                <Text/>
            </Route>
            <Route path="/player">
                <Player/>
            </Route>
            <Route path="/kanye">
                <KanyeRest/>
            </Route>
            <Route path="/info">
                <Info/>
            </Route>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    app: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: "center",
    },
    headerRow: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
    },
    header: {
        width: 310,
        height: 200,
        marginTop: -70,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
        backgroundColor: '#DC143C',
        border: '3.5px solid white',
    },
    menu: {
        display: "flex",
        marginTop: 50
    },
    headerColumn: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
    },
    logoColumn: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        borderRadius: '100%',
        border: '3.5px solid white',
        padding: '.8em',
        paddingTop: '.3em',
        marginLeft: '.2em',
        marginRight: '.2em',
        textAlign: 'center',
        height: "5vw",
        minHeight: 75,
        width: "5vw",
        minWidth: 75,
        backgroundColor: theme.palette.primary.main,
        cursor: 'pointer',
        '&:hover' : {
            border: '3.5px solid #282c34',
            backgroundColor: 'white',
            color: theme.palette.primary.main,
        },
    },
    heading: {
        minWidth: 90,
        fontSize: 13,
        fontFamily: "\"Arial Black\", Gadget, sans-serif",
    },
    appLogo: {
        height: "4vw",
        minHeight: 50,
    },
    wolfButton: {
        width: 75,
        height: 30,
        marginTop: '.5em',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            border: '2px solid white'
        },
    },
    selectedButton: {
        width: 75,
        height: 30,
        marginTop: '.5em',
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.main,
        border: '2px solid white',
        cursor: 'default',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            border: '2px solid white'
        },
    },
}));