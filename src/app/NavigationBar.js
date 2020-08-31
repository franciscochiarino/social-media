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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sideDivs: {
    width: '180px',
    margin: '0 0.8rem'
  },
  logo: {
    fontFamily: 'Poppins, sans-serif',
    color: '#5babed',
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
    <section>
      <BottomNavigation className={classes.root} value={value} onChange={handleChange} >

        <div className={classes.sideDivs} >
          <h1 className={classes.logo} >social media</h1>
        </div>

        <div>
          <BottomNavigationAction href="#/" label="Home" value="home" icon={<HomeIcon />} />
          <BottomNavigationAction href="#/people" label="People" value="people" icon={<PeopleAltIcon />} />
          <BottomNavigationAction href="#/images" label="Images" value="images" icon={<ImageIcon />} />
        </div>

        <div className={classes.sideDivs} >
          <button>hola</button>
        </div>

      </BottomNavigation>
    </section>
  )
}

export default withRouter(NavigationBar);
