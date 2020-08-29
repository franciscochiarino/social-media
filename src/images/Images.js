import React, { useEffect, useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageSkeleton from '../skeletons/ImageSkeleton';

// Style
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '600px',
    margin: '2rem auto'
  },
  item: {
    display: 'flex',
  },
  paper: {
    borderRadius: '10px',
  },
  image: {
    padding: '0.5rem',
    width: '166px',
    height: '166px',
    // Hide alt text:
    background: 'white',
    color: 'white',
  }
}));

export default function Images() {
  const [images, setImages] = useState([]);
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  const classes = useStyles();

  useEffect(() => {
    // Get Images
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => {
        const reducedData = data.filter(({id}) => {
          return id < 10;
        })
        return reducedData;
      })
      .then(reducedData => {
        setImages(reducedData);
      });
  }, []);

  const renderImages = images.map(({ thumbnailUrl, title }) => {
    const imageStyle = !imageIsLoaded ? { display: 'none' } : {};

    return(
      <Grid className={classes.item} container item xs={4} spacing={1}>
        <Paper className={classes.paper} elevation="3">
          { !imageIsLoaded ? <ImageSkeleton /> : null }
          <img className={classes.image} src={thumbnailUrl} alt={title} style={imageStyle} onLoad={() => setImageIsLoaded(true)} />
        </Paper>
      </Grid>
    )
  })

  return (
    <>
    <Grid className={classes.root} container spacing={4} >
      {renderImages}
    </Grid>
    </>
  )
}
