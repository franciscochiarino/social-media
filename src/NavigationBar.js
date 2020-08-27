import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ImageIcon from '@material-ui/icons/Image';

export default function NavigationBar() {
  const [value, setValue] = useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} >
        <BottomNavigationAction href="#/" label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction href="#/people" label="People" value="people" icon={<PeopleAltIcon />} />
        <BottomNavigationAction href="#/images" label="Images" value="images" icon={<ImageIcon />} />
    </BottomNavigation>
  )
}
