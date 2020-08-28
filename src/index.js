
import React from "react"
import App from "./app/App.js"
import reactDOM from "react-dom"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1877f2',
    },
    secondary: {
      main: '#e4e6eb'
    }
  }
})

reactDOM.render(<ThemeProvider theme={theme} ><App/></ThemeProvider>,document.getElementById("root"))