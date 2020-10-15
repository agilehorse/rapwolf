import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import kanye from '../resources/kanye.jpg'
import {Typography} from "@material-ui/core";

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
        <div className={classes.root}>
            <Typography className={classes.quote}>
                {"\"" + quote + "\""}
            </Typography>
            - YE
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${kanye})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '80vw',
        display: 'flex',
        alignItems: 'center',
        flexDirection : 'column',
        fontWeight: 'bold'
    },
    quote: {
        marginTop: '4em',
        marginLeft: '2em',
        marginRight: '2em',
        fontWeight: 'bold'
    },
}));