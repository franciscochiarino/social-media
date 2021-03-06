import React, { useState } from 'react';
import world from '../../assets/world.png';
import { Typography } from '@material-ui/core';
import StyledInput from '../../style/StyledInput';
import StyledButton from '../../style/StyledButton';
import { makeStyles } from '@material-ui/core/styles';
import { postUser } from '../../actions/userActions';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    minWidth: '520px',
    maxWidth: '740px',
    margin: '3rem auto',
  },
  welcomeMessage: {
    paddingTop: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
  },
  btn: {
    width: '80px',
    marginTop: '1rem',
  }
})

export default function SignUp() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email, password };

    postUser(user)
      .then(data => console.log(data.success))
      .catch(err => console.log(err))
  }

  return (
    <section className={classes.root}>

      <div>
        <img src={world} alt="planet earth" width={200} />
        <div className={classes.welcomeMessage}>
          <Typography variant="h2">Welcome to</Typography>
          <Typography variant="h2" color="primary">social media</Typography>
          <Typography variat="subtitle1">Find the people you're looking for</Typography>
        </div>
      </div>

      <form className={classes.form} onSubmit={handleSubmit}>
        <StyledInput id="standard-basic" required label="Standard" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
        <StyledInput id="standard-basic" required label="Standard" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
        <StyledInput id="standard-basic" required label="Standard" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <StyledInput id="standard-basic" required label="Standard" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <StyledButton className={classes.btn} type="submit" color="primary">Sign Up!</StyledButton>
      </form>

    </section>
  )
}