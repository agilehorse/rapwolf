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
            <Typography className={classes.description}>
                The application uses three different apis.<br/> First one is made by me, which provides data about slovak
                rap artists. It's available in the top menu under "api". <br/>Second one
                is <Link href="https://developer.spotify.com/documentation/web-api" className={classes.link}>
                Spotify Api
            </Link> (top menu under "player") - You can choose to connect your spotify account with this app, then you
                will get randomly chosen song from the slovak rap artist - Pil C. Just to note, some songs are explicit
                :) If you cancel connecting with your account, or if you press button "I do not have an account", you'll
                get a default song <b>Hawaii</b>.<br/>
                The last one uses <Link href="https://kanye.rest" className={classes.link}>Kanye.Rest</Link>. Accessible
                at "kanye", it obtains some quote of Kanye West.
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
        width: '58%',
        webkitBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        mozBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        boxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        backgroundColor: '#282c34',
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
        [theme.breakpoints.up('sm')]: {
            height: '70%',
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
        },
        color: theme.palette.secondary.main,
    },
    description: {
        marginTop: '2em',
        marginLeft: '2.3em',
        marginRight: '2.3em',
        marginBottom: '1em',
    },
    link: {
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
    }
}));