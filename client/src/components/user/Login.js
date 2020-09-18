import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import world from '../../assets/world.png';
import StyledInput from '../../style/StyledInput';
import StyledButton from '../../style/StyledButton';
import { makeStyles } from '@material-ui/core/styles';
import { useAlert } from 'react-alert';
import { login } from '../../actions/userActions';
import { UserContext } from '../../context/UserContext';

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
  const alert = useAlert();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password)
    .then(res => {
      res.success ? setUser(res.user) : alert.error('Something went wrong...');
    })
    .catch(err => {
      console.log(err);
      alert.error('Something went wrong. Please try again later.');
    });
  };

  // Redirect if user is logged in
  if (user) return <Redirect to={`/profile/${user.id}`} />

  return (
    <section className={classes.root} >
      <img className={classes.img} src={world} alt="planet earth" width={140} />

      <form className={classes.form} onSubmit={handleSubmit}>
        <StyledInput id="standard-basic" required label="Standard" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <StyledInput id="standard-basic" required label="Standard" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <StyledButton className={classes.btn} type="submit" color="primary">Login</StyledButton>
      </form>
    </section>
  )
}
