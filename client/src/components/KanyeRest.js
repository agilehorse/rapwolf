import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import kanye from '../resources/kanye.jpg'
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

export default function KanyeRest() {
    const classes = useStyles();

    const [quote, setQuote] = useState("");

    useEffect(() => {
        fetch('https://api.kanye.rest').then(response => {
            if (response.ok) {
                response.json().then(data => {
                    setQuote(data.quote)
                })
            }
        })
    }, [])

    return (
        <Paper className={classes.root}>
            <div className={classes.content}>
                <Typography className={classes.quote}>
                    {"\"" + quote + "\""}
                </Typography>
                - YE
            </div>
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: '1%',
        alignContent: 'center',
        marginTop: '1em',
        flexGrow: 1,
        marginBottom: '2em',
        width: '70%',
        webkitBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        mozBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        boxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        backgroundColor: '#282c34',
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
    },
    content: {
        backgroundImage: `url(${kanye})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        fontWeight: 'bold',
    },
    quote: {
        marginTop: '3em',
        marginLeft: '2em',
        marginRight: '2em',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em',
            textAlign: 'center',
        }
    },
}));