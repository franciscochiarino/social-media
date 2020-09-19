import React from 'react';
import { CardHeader, CardContent, CardActions, IconButton, Typography, Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import StyledCard from '../../style/StyledCard';
import { deletePost } from '../../actions/postActions';
// import PostCardSkeleton from '../skeletons/PostCardSkeleton';

const cardHeaderStyle = {
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'center'
}

export default function PostCardContainer({ id, author, date, content, user }) {

  const handleDeleteButton = () => {
    deletePost(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
      <>
        <StyledCard>

          <div style={cardHeaderStyle}>
            <CardHeader 
              avatar={ <Avatar src={`https://joeschmoe.io/api/v1/${author.id}`} /> } 
              title={`${author.firstName} ${author.lastName}`} 
              titleTypographyProps={{ variant: "h6"}} 
              // FIXME: Display the date properly
              subheader={new Date(date).toLocaleDateString()} 
            />

            {user && user.id === author.id ? 
              <div>
                <IconButton aria-label="edit" title="Edit">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" title="Delete" style={{ marginRight: '0.5rem' }} onClick={handleDeleteButton}>
                  <DeleteIcon />
                </IconButton>
              </div>
            : null }
          </div>

          <CardContent >
            <Typography variant="body1">
              {content}
            </Typography> 
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="like" title="Like">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" title="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>

        </StyledCard>
      </>
      // <PostCardSkeleton />
  )
}
