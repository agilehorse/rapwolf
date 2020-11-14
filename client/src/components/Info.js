import Paper from "@material-ui/core/Paper";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";

export default function Info() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h2" className={classes.heading}>
                Rap Wolf
            </Typography>
            <Typography className={classes.description}>
                This project was build for the course <i>Internet Applications Development</i> on Czech Technical
                University in
                Prague.
            </Typography>
            <br/>
            <Typography className={classes.description2}>
                The application uses three different apis.<br/> I created the first api, which provides data about
                slovak rap artists. It's used in the top menu under "api". It's available publicly, except for endpoints
                that modify data, more info <Link href="http://rapwolf.herokuapp.com/api-docs" className={classes.link}>
                here</Link>.
                <br/>Second one
                is <Link href="https://developer.spotify.com/documentation/web-api" className={classes.link}>
                Spotify Api
            </Link> used at "player" - You can choose to connect your spotify account with this app, then you
                will get randomly chosen song from the slovak rap artist - Pil C. Just to note, some songs are explicit
                :) If you cancel connecting with your account, or if you press button "I do not have an account", you'll
                get a default song <b>Hawaii</b>.<br/>
                The last one uses <Link href="https://kanye.rest" className={classes.link}>Kanye.Rest</Link>. Accessible
                at "kanye", it obtains some quote of Kanye West, some of which are also explicit :).
            </Typography>
        </Paper>
    )
}
const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        padding: '1%',
        marginTop: '1em',
        webkitBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        mozBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        boxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        backgroundColor: '#282c34',
        width: '85%',
        flexGrow: 1,
        marginBottom: '2em',
        [theme.breakpoints.up('md')]: {
            width: '58%',
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        }
    },
    heading: {
        fontFamily: "\"Georgia\", serif",
        fontWeight: 'bold',
        fontSize: 72,
        [theme.breakpoints.down('xs')]: {
            fontSize: 56,
            marginLeft: '1em',
            marginRight: '1em',
        },
        color: theme.palette.secondary.main,
    },
    description: {
        marginTop: '2em',
        marginLeft: '2.3em',
        marginRight: '2.3em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '1em',
            marginRight: '1em',
        },
        fontFamily: "\"Roboto\", sans-serif",
    },
    description2: {
        marginLeft: '2.3em',
        marginRight: '2.3em',
        marginBottom: '1.5em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '1em',
            marginRight: '1em',
        },
    },
    link: {
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
    }
}));