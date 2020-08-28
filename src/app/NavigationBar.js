import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: '0px',
    zIndex: '1',
    width: '100%',
    borderBottom: '1px solid #dfe1e3',
    boxShadow: '0px 1px 2px 0px rgba(209,209,209,0.75)',
  }
})

function NavigationBar({ location }) {
  const [value, setValue] = useState('');
  const classes = useStyles();

  useEffect(() => {
    switch(location.pathname) {
      case '/':
        setValue('home');
        break;
      case '/people':
        setValue('people');
        break;
      case '/images':
        setValue('images');
        break;
      default:
        return;
    }
  }, [location.pathname, setValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation className={classes.root} value={value} onChange={handleChange} >
        <BottomNavigationAction href="#/" label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction href="#/people" label="People" value="people" icon={<PeopleAltIcon />} />
        <BottomNavigationAction href="#/images" label="Images" value="images" icon={<ImageIcon />} />
    </BottomNavigation>
  )
}

export default withRouter(NavigationBar);
