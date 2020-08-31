
import React from "react"
import App from "./components/App.js"
import reactDOM from "react-dom"
import { ThemeProvider } from '@material-ui/styles';
import Theme from './style/Theme';

reactDOM.render(<ThemeProvider theme={Theme} ><App/></ThemeProvider>,document.getElementById("root"))