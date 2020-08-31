import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Button } from '@material-ui/core';
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  navIcons: {
    width: '500px',
  },
  sideDivs: {
    width: '180px',
    margin: '0 0.8rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: 'Poppins, sans-serif',
    color: '#1877f2',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  btn: {
    fontFamily: 'Poppins, sans-serif',
    borderRadius: '15px',
    width: '80px',
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
    <section className={classes.root}>

      <div className={classes.sideDivs} >
        <h1 className={classes.logo} >social media</h1>
      </div>

      <BottomNavigation className={classes.navIcons} value={value} onChange={handleChange} >
        <BottomNavigationAction href="#/" label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction href="#/people" label="People" value="people" icon={<PeopleAltIcon />} />
        <BottomNavigationAction href="#/images" label="Images" value="images" icon={<ImageIcon />} />
      </BottomNavigation>

      <div className={classes.sideDivs} >
        <Button size="small" className={classes.btn} variant="contained" color="secondary">Login</Button>
        <Button size="small" className={classes.btn} variant="contained" color="primary">Sign Up</Button>
      </div>

    </section>
  )
}

export default withRouter(NavigationBar);
