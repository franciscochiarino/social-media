
import React from "react";
import App from "./components/App.js";
import reactDOM from "react-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { ThemeProvider } from '@material-ui/styles';
import Theme from './style/Theme';
import { UserProvider } from './context/UserContext';


// Alert Configuration
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

reactDOM.render(
  <ThemeProvider theme={Theme}>
    <AlertProvider template={AlertTemplate} {...options}>
      <UserProvider>
        <App/>
      </UserProvider>
    </AlertProvider>
  </ThemeProvider>
,document.getElementById("root"));