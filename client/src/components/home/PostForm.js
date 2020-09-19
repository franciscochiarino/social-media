import React, { useState } from 'react';
import StyledCard from '../../style/StyledCard';
import StyledButton from '../../style/StyledButton';
import { CardHeader, Avatar, TextField } from '@material-ui/core';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 0',
}

const postButtonStyle = {
  borderRadius: '0px 0px 15px 15px',
}

export default function PostForm({ user, handlePostForm }) {
  const [content, setContent] = useState('initialState');

  return (
    <StyledCard>
      <form onSubmit={e => handlePostForm(e, content)}>
        <div style={divStyle} >
          <CardHeader avatar={ <Avatar src={`https://joeschmoe.io/api/v1/${user.id}`} /> } /> 
          <TextField id='outlined-basic' multiline style={{width: '80%'}} placeholder={`What's on your mind, ${user.firstName}?`} onChange={e => setContent(e.target.value)} />
        </div>
        <div>
          <StyledButton fullWidth color='primary' type='submit' style={postButtonStyle}>POST</StyledButton>
        </div>
      </form>

    </StyledCard>
  )
}
