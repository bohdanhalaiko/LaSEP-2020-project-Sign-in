import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { recovPassEmailAction } from '../redux/action';


export default function PasswordEmail() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSendEmail(e) {
    e.preventDefault();
    if (email === '111@gmail.com') {
      dispatch(recovPassEmailAction());
    }
  }

  return (
    <div>
      <p>Please enter your email to reset password.</p>
      <br />
      <form onSubmit={handleSendEmail}>
        <TextField
          required
          id="standard-required"
          label="Email"
          onChange={handleEmail}
          name="email"
          value={email}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Send email
        </Button>
      </form>
    </div>
  );
}
