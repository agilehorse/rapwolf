import Button from "@material-ui/core/Button";
import Logo from "../resources/wolfLogoCrop.png";
import {Typography} from "@material-ui/core";
import {Redirect, Route, useHistory} from "react-router-dom";
import Spotify from "./Spotify";
import KanyeRest from "./KanyeRest";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const x = {
    "album": {
        "album_type": "album",
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/2U1l35agymGrBDFeMIxVLG"
                },
                "href": "https://api.spotify.com/v1/artists/2U1l35agymGrBDFeMIxVLG",
                "id": "2U1l35agymGrBDFeMIxVLG",
                "name": "Pil C",
                "type": "artist",
                "uri": "spotify:artist:2U1l35agymGrBDFeMIxVLG"
            }
        ],
        "external_urls": {
            "spotify": "https://open.spotify.com/album/65QC8PoyyOQWvVbubfktaf"
        },
        "href": "https://api.spotify.com/v1/albums/65QC8PoyyOQWvVbubfktaf",
        "id": "65QC8PoyyOQWvVbubfktaf",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ee97ce9e20ca74c4c4bdb31c",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ee97ce9e20ca74c4c4bdb31c",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ee97ce9e20ca74c4c4bdb31c",
                "width": 64
            }
        ],
        "name": "V Radiu Hral Elan, Ked Umrel ...",
        "release_date": "2017-11-15",
        "release_date_precision": "day",
        "total_tracks": 12,
        "type": "album",
        "uri": "spotify:album:65QC8PoyyOQWvVbubfktaf"
    },
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/2U1l35agymGrBDFeMIxVLG"
            },
            "href": "https://api.spotify.com/v1/artists/2U1l35agymGrBDFeMIxVLG",
            "id": "2U1l35agymGrBDFeMIxVLG",
            "name": "Pil C",
            "type": "artist",
            "uri": "spotify:artist:2U1l35agymGrBDFeMIxVLG"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/5lEkQtWa3UKlI1hj7sktcd"
            },
            "href": "https://api.spotify.com/v1/artists/5lEkQtWa3UKlI1hj7sktcd",
            "id": "5lEkQtWa3UKlI1hj7sktcd",
            "name": "Calin",
            "type": "artist",
            "uri": "spotify:artist:5lEkQtWa3UKlI1hj7sktcd"
        }
    ],
    "disc_number": 1,
    "duration_ms": 217047,
    "explicit": true,
    "external_ids": {
        "isrc": "TCADI1751710"
    },
    "external_urls": {
        "spotify": "https://open.spotify.com/track/7IIF5ZPeIvJdyEmuaiO1Sh"
    },
    "href": "https://api.spotify.com/v1/tracks/7IIF5ZPeIvJdyEmuaiO1Sh",
    "id": "7IIF5ZPeIvJdyEmuaiO1Sh",
    "is_local": false,
    "is_playable": true,
    "name": "Silent Hill (feat. Calin)",
    "popularity": 39,
    "preview_url": "https://p.scdn.co/mp3-preview/d20d9ea38951d015738989f1ae48e94b84481a9d?cid=3e1d698af830411786a9ef36050e8bf5",
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:7IIF5ZPeIvJdyEmuaiO1Sh"
}

export default function Main() {

    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.app}>
            <header className={classes.headerRow}>
                <div className={classes.header}>
                    <div className={classes.menu}>
                        <div className={classes.headerColumn}>
                            <Button
                                className={window.location.pathname === '/custom' ? classes.selectedButton : classes.wolfButton}
                                onClick={() => history.push("/custom")}
                            >
                                Custom
                            </Button>
                            <Button
                                className={window.location.pathname === '/text' ? classes.selectedButton : classes.wolfButton}
                                onClick={() => history.push('/text')}
                            >
                                Just
                            </Button>
                        </div>
                        <div className={classes.logoColumn}>
                            <img src={Logo} className={classes.appLogo} alt="logo"/>
                            <Typography className={classes.heading}>RAP WOLF</Typography>
                        </div>
                        <div className={classes.headerColumn}>
                            <Button
                                className={window.location.pathname === '/spotify' ? classes.selectedButton : classes.wolfButton}
                                onClick={() => history.push('/spotify')}
                            >
                                Spotify
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
            <Route path="/custom">

            </Route>
            <Route path="/text">

            </Route>
            <Route path="/spotify">
                <Spotify/>
            </Route>
            <Route default path="/kanye">
                <KanyeRest/>
            </Route>
            <Redirect to="/spotify"/>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    app: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
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
        border: '3px solid white',
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
        border: '3px solid white',
        padding: '.7em',
        paddingTop: '.3em',
        marginLeft: '.2em',
        marginRight: '.2em',
        textAlign: 'center',
        height: "5vw",
        minHeight: 75,
        width: "5vw",
        minWidth: 75,
        backgroundColor: theme.palette.primary.main,
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