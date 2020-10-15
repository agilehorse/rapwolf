import React from 'react';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import logo from "./resources/wolfLogoCrop.png";
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import KanyeRest from "./components/KanyeRest";

function TabPanel({children, value, index, ...other}) {
    return (
        <div role="tabpanel" hidden={value !== index}{...other}>
            {value === index && children}
        </div>
    );
}

export default function App() {
    const classes = useStyles();
    const [value, setValue] = React.useState(3);

    function handleChange(newValue) {
        setValue(newValue);
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.app}>
                <header className={classes.header}>
                    <div className={classes.headerColumn}>
                        <Button className={value === 0 ? classes.selectedButton : classes.wolfButton} onClick={() => handleChange(0)}>Custom.Api</Button>
                        <Button className={value === 1 ? classes.selectedButton : classes.wolfButton} onClick={() => handleChange(1)}>Just.text</Button>
                    </div>
                    <div className={classes.logoColumn}>
                        <img src={logo} className={classes.appLogo} alt="logo"/>
                        <Typography className={classes.heading}>RAP WOLF</Typography>
                    </div>
                    <div className={classes.headerColumn}>
                        <Button className={value === 2 ? classes.selectedButton : classes.wolfButton} onClick={() => handleChange(2)}>Spotify.Api</Button>
                        <Button className={value === 3 ? classes.selectedButton : classes.wolfButton} onClick={() => handleChange(3)}>Kanye.rest</Button>
                    </div>
                </header>
                <Paper className={classes.content}>
                    <TabPanel value={value} index={0}>

                    </TabPanel>
                    <TabPanel value={value} index={1}>

                    </TabPanel>
                    <TabPanel value={value} index={2}>

                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <KanyeRest/>
                    </TabPanel>
                </Paper>
            </div>
        </ThemeProvider>
    );
}
const theme = createMuiTheme({
    palette: {
        text: {
            primary: '#fff'
        },
        primary: {
            main: '#282c34',
        }
    }
});

const useStyles = makeStyles((theme) => ({
    app: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: "center",
    },
    header: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
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
        marginTop: '.5em',
        paddingBottom: '.5em',
        paddingLeft: '1em',
        paddingRight: '1em',
        marginLeft: '.5em',
        marginRight: '.5em',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: '#DC143C'
        },
    },
    heading: {
        width: '15vmin',
        fontSize: 13,
        fontFamily: "\"Arial Black\", Gadget, sans-serif",
    },
    appLogo: {
        height: "10vmin",
    },
    wolfButton: {
        width: 100,
        height: 30,
        marginTop: '.5em',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#DC143C',
            border: '2px solid white'
        },
    },
    selectedButton: {
        width: 100,
        height: 30,
        marginTop: '.5em',
        fontWeight: 'bold',
            backgroundColor: '#DC143C',
            border: '2px solid white'
    },
    content: {
        display: 'flex',
        padding: '1%',
        alignContent: 'center',
        marginTop: '1em',
        height: '74%',
        width: '80%',
        webkitBoxShadow: '10px 10px 15px 5px rgba(255,255,255,1)',
        mozBoxShadow: '10px 10px 15px 5px rgba(255,255,255,1)',
        boxShadow: '10px 10px 15px 5px rgba(255,255,255,1)',
        backgroundColor: '#282c34',
    },
}));
