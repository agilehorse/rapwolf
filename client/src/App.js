import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter, Switch} from "react-router-dom";
import Main from "./components/Main";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Main/>
                </Switch>
            </BrowserRouter>
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
        },
        secondary: {
            main: '#DC143C',
        }
    }
});
