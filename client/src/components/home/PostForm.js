import React, { useState } from 'react';
import StyledCard from '../../style/StyledCard';
import StyledButton from '../../style/StyledButton';
import { CardHeader, Avatar, TextField } from '@material-ui/core';
import { addPost } from '../../actions/postActions';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 0',
}

const postButtonStyle = {
  borderRadius: '0px 0px 15px 15px',
}

export default function PostForm({ user, updatePosts, setUpdatePosts }) {
  const [content, setContent] = useState('initialState');

  // Create new post
  const handlePostForm = (e, content) => {
    e.preventDefault();

    if (user) {
      addPost(user.id, user.firstName, user.lastName, content)
        .then(() => setUpdatePosts(!updatePosts))
        .catch(err => alert.error('Something went wrong. Please try again later', { onOpen: () => console.log(err) }));
    } else {
      alert.info('Please log in to post something.');
    }
  };

  return (
    <StyledCard>
      <form onSubmit={e => handlePostForm(e, content)}>

        {/* Avatar and input */}
        <div style={divStyle} >
          <CardHeader avatar={ <Avatar src={`https://joeschmoe.io/api/v1/${user.id}`} /> } /> 
          <TextField id='outlined-basic' multiline style={{width: '80%'}} placeholder={`What's on your mind, ${user.firstName}?`} onChange={e => setContent(e.target.value)} />
        </div>

        {/* Submit */}
        <div>
          <StyledButton fullWidth color='primary' type='submit' style={postButtonStyle}>POST</StyledButton>
        </div>
      </form>
    </StyledCard>
  )
}
