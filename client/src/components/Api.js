import Paper from "@material-ui/core/Paper";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import MissingPhotoRed from "../resources/missingRed.png"
import GlebPhoto from "../resources/GlebPhoto.png"
import GlebPhoto2 from "../resources/GlebPhoto2.png"
import MissingPhotoWhite from "../resources/missingWhite.png"
import SeparPhoto from "../resources/SeparPhoto.jpg"
import SeparPhoto2 from "../resources/SeparPhoto2.jpg"
import {Grid} from "@material-ui/core";


function getImage(artist) {
    if (artist.name === 'Separ') {
        return artist.isHover ? SeparPhoto2 : SeparPhoto;
    } else if (artist.name === 'GLEB') {
        return artist.isHover ? GlebPhoto2 : GlebPhoto;
    }
    return artist.isHover ? MissingPhotoWhite : MissingPhotoRed;
}

export default function Api() {
    const classes = useStyles();

    const [loading, setLoading] = useState(true);
    const [artists, setArtists] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/api/artists");
                if (response.ok) {
                    const data = await response.json();
                    setLoading(false);
                    return data;
                } else {
                    console.log(response.statusText);
                    setLoading(false);
                    return null;
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                return null;
            }
        }

        fetchData().then(data => setArtists(data))
    }, [])

    if (loading) {
        return (
            <Paper className={classes.paper}>
                <div className={classes.loading}>
                    <CircularProgress color="secondary"/>
                    <Typography color="secondary" variant="h5">Loading ...</Typography>
                </div>
            </Paper>
        )
    }

    if (artists === null) {
        return (
            <Paper className={classes.paper}>
                <Typography color="secondary" variant="h5">Could not load artists. Please try again later.</Typography>
            </Paper>
        )
    }

    if (artists.length === 0) {
        return (
            <Paper className={classes.paper}>
                <Typography color="secondary" variant="h5">No artists present</Typography>
            </Paper>
        )
    }

    function markHover(artist, mark) {
        const newArtists = artists.map(a => a.name === artist.name ? {...a, isHover: mark} : a);
        setArtists(newArtists)
    }

    return (
        <Grid className={classes.artistsRoot} container spacing={0}>
            {artists.map(artist =>
                <Card className={classes.card} component={Grid} item xs={12} sm={8} md={4} lg={3}
                      onMouseOver={() => markHover(artist, true)} onMouseOut={() => markHover(artist, false)}>
                    <CardMedia className={classes.media} image={getImage(artist)}/>
                    <CardContent className={classes.content}>
                        <div className={classes.mainContent}>
                            <div className={artist.isHover ? classes.labelsRed : classes.labelsWhite}>
                                <Typography className={classes.name}>Name:</Typography>
                                <Typography className={classes.name}>Real name:</Typography>
                                <Typography className={classes.name}>Bio:</Typography>
                            </div>
                            <div className={artist.isHover ? classes.textWhite : classes.textRed}>
                                <Typography className={classes.name}>{artist.name}</Typography>
                                {artist.realName && <Typography className={classes.name}>{artist.realName}</Typography>}
                            </div>
                        </div>
                        <Typography className={artist.isHover ? classes.textWhite : classes.textRed}>{artist.bio}</Typography>
                    </CardContent>
                </Card>)}
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'start',
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
    artistsRoot: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'flex-start',
        flexGrow: 1,
        width: '100%'
    },
    card: {
        backgroundColor: '#282c34',
        [theme.breakpoints.down('xs')]: {
            margin: '1.5em',
        },
        marginTop: '1em',
        marginLeft: '3em',
        marginRight: '3em',
        color: theme.palette.secondary.main,
        webkitBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        mozBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        boxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        '&:hover': {
            webkitBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
            mozBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
            boxShadow: '10px 10px 10px 5px rgba(220,20,60,1)',
            border: '13px solid white'
        }
    },
    media: {
        paddingTop: '80%',
    },
    content: {},
    labelsWhite: {
        color: 'white',
        marginRight: '.5em',
    },
    labelsRed: {
        color: theme.palette.secondary.main,
        marginRight: '.5em',
    },
    mainContent: {
        display: 'flex',
    },
    name: {
        fontWeight: 'bold',
    },
    textRed: {
        color: theme.palette.secondary.main,
    },
    textWhite: {
        color: 'white',
    }
}));