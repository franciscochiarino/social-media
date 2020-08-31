import React from 'react';
import world from '../../assets/world.png';
import StyledInput from '../../style/StyledInput';
import StyledButton from '../../style/StyledButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '3rem 0',
  },  
  img: {
    display: 'block',
    margin: '1rem auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btn: {
    width: '80px',
    marginTop: '1rem',
  }
})

export default function Login() {
  const classes = useStyles();

  return (
    <section className={classes.root} >
      <img className={classes.img} src={world} alt="planet earth" width={140} />
      <form className={classes.form}>
        <StyledInput id="standard-basic" required label="Standard" type="email" placeholder="Email" />
        <StyledInput id="standard-basic" required label="Standard" type="password" placeholder="Password" />
        <StyledButton className={classes.btn} type="submit" color="primary">Login</StyledButton>
      </form>
    </section>
  )
}
