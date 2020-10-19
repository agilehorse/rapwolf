import React, {useEffect, useState} from "react";
import {PIL_C_SPOTIFY_ID} from "../utils/consts";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Typography} from "@material-ui/core";
import SpotifyLogo from '../resources/spotify.png'
import CircularProgress from '@material-ui/core/CircularProgress';
import AudioPlayer from "material-ui-audio-player";
import Paper from "@material-ui/core/Paper";

export default function Spotify() {

    const classes = useStyles();
    const url = new URL(window.location.href.replace(/#/g, "?"));
    const [loading, setLoading] = useState(true);
    const [songData, setSongData] = useState({
        name: "",
        imageUrl: "",
        mp3Url: "",
    });

    useEffect(() => {
        const storageToken = localStorage.getItem('access_token');
        const urlToken = url.searchParams.get('access_token');
        if (!songData.name)
        {
            if (storageToken && Date.now() < new Date(Number(localStorage.getItem('expires_in'))))
            {
                getSong(storageToken).then(() => setLoading(false));
            } else if (urlToken) {
                localStorage.setItem('access_token', urlToken);
                const expiration = new Date((new Date()).getTime() + url.searchParams.get('expires_in') * 1000);
                localStorage.setItem('expires_in', expiration.getTime().toString())
                getSong(urlToken).then(() => setLoading(false));
            } else {
                setLoading(false);
            }
        }
    }, [songData.name, url.searchParams])

    async function getSong(token) {
        const albumsUrl = new URL('https://api.spotify.com/v1/artists/' + PIL_C_SPOTIFY_ID + '/albums');
        albumsUrl.searchParams.append('include_groups', 'album');
        const albumsResponse = await fetch(albumsUrl.href, {
            headers: {'Authorization': 'Bearer ' + token}
        });

        if (albumsResponse.ok) {
            const albumsData = await albumsResponse.json();
            const albums = albumsData.items;
            let randomAlbum = albums[Math.floor(Math.random() * albums.length)];
            const tracksResponse = await fetch('https://api.spotify.com/v1/albums/' + randomAlbum.id + '/tracks', {
                headers: {'Authorization': 'Bearer ' + token}
            })

            if (tracksResponse.ok) {
                const tracksData = await tracksResponse.json();
                const tracks = tracksData.items;
                const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
                setSongData({
                    name: randomTrack.name,
                    imageUrl: randomAlbum.images[0].url,
                    mp3Url: randomTrack.preview_url
                })
            }
        }
    }

    async function connectWithSpotify() {
        const url = new URL('https://accounts.spotify.com/authorize');
        const params = url.searchParams;
        params.append('client_id', '3e1d698af830411786a9ef36050e8bf5');
        params.append('response_type', 'token');
        params.append('redirect_uri', 'http://rapwolf.herokuapp.com/spotify');
        window.open(url.href, '_self');
    }

    return (
        <div className={classes.root}>
            {loading
                ?
                <Paper className={classes.paper}>
                    <div className={classes.loading}>
                        <CircularProgress color="secondary"/>
                        <Typography color="secondary" variant="h5">Loading ...</Typography>
                    </div>
                </Paper>
                :
                songData.name
                    ?
                    <Paper className={classes.songPaper}>
                        <img src={songData.imageUrl} alt="album" className={classes.songImage}/>
                        <div className={classes.player}>
                            <Typography className={classes.songName} variant="subtitle1">{songData.name}</Typography>
                            <AudioPlayer
                                elevation={0}
                                width="100%"
                                variation="default"
                                spacing={3}
                                order="standart"
                                preload="auto"
                                src={songData.mp3Url}
                                useStyles={playerStyles}
                            />
                        </div>
                    </Paper>
                    :
                    <Paper className={classes.paper}>
                        <img src={SpotifyLogo} alt="spotify"/>
                        <Button color="secondary" variant="contained" className={classes.button}
                                onClick={() => connectWithSpotify()}>
                            Connect with spotify
                        </Button>
                    </Paper>
            }
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
        height: '90%',
        marginTop: '1em',
    },
    loading: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    songPaper: {
        height: '68vh',
        width: '68vh',
        backgroundColor: theme.palette.secondary.main,
        webkitBoxShadow: '5px 5px 10px 3px rgba(255,255,255,1)',
        mozBoxShadow: '5px 5px 10px 3px rgba(255,255,255,1)',
        boxShadow: '5px 5px 10px 3px rgba(255,255,255,1)',
        position: 'relative',
        paddingTop: '1em',
        paddingRight: '1em',
        paddingLeft: '1em',
        [theme.breakpoints.down('xs')]: {
            width: '85vw',
            height: '85vw'
        }
    },
    songImage: {
        width: '100%',
        height: 'auto',
        textAlign: 'center',
    },
    songName: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.secondary.main,
        marginBottom: -5,
        paddingTop: 5,
        marginLeft: '1em'
    },
    player: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: '1%',
        marginTop: '1em',
        height: '80%',
        width: '80%',
        webkitBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        mozBoxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        boxShadow: '10px 10px 10px 5px rgba(255,255,255,1)',
        backgroundColor: '#282c34',
        [theme.breakpoints.down('md')]: {
            width: '85%',
        }
    },
    spotifyLogo: {
        width: '100%',
        height: 'auto'
    },
    button: {
        marginTop: '1em',
        fontWeight: 'bold',
    }
}))

const playerStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        backgroundColor: theme.palette.secondary.main,
        margin: 0,
    },
    playIcon: {
        color: theme.palette.text.primary,
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    pauseIcon: {
        color: theme.palette.text.primary,
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    volumeIcon: {
        color: theme.palette.text.primary,
        '&:hover': {
            color: theme.palette.primary.main,
        }
    },
    volumeSlider: {
        color: theme.palette.primary.main,
    },
    progressTime: {
        color: theme.palette.text.primary
    },
    mainSlider: {
        color: theme.palette.text.primary,
        '& .MuiSlider-rail': {
            color: theme.palette.text.primary
        },
        '& .MuiSlider-track': {
            color: theme.palette.text.primary
        },
        '& .MuiSlider-thumb': {
            color: theme.palette.text.primary
        }
    }
}))