import React from 'react';
import { CardHeader, CardContent, CardActions, IconButton, Typography, Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import StyledCard from '../../style/StyledCard';

const cardHeaderStyle = {
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'center'
}

export default function PostCardContainer({ author, date, content }) {

  return (
    <>
      <StyledCard >

        <div style={cardHeaderStyle}>
          <CardHeader 
            avatar={ <Avatar src={`https://joeschmoe.io/api/v1/${author.id}`} /> } 
            title={author} 
            titleTypographyProps={{ variant: "h6"}} 
            // FIXME: Display the date properly
            subheader={new Date(date).toLocaleDateString()} 
          />

          <div>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete"  style={{ marginRight: '0.5rem' }}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>

        <CardContent >
          <Typography variant="body1">
            {content}
          </Typography> 
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="like">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>

      </StyledCard>
    </>
  )
}
