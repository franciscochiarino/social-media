import React from 'react';
import { Card, CardHeader, CardContent, CardActions, IconButton, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 600,
    margin: "1.5rem auto",
  }
}));

export default function CardContainer({ title, body }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} >

        <CardHeader avatar={ <Avatar /> } title={title} subheader={new Date().toDateString()} />

        <CardContent>
          <Typography>
            {body}
          </Typography> 
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>

      </Card>
    </>
  )
}
