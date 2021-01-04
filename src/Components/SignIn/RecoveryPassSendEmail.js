import { Button, IconButton, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiArrowBack } from 'react-icons/bi';
import { Redirect } from 'react-router';
import { recoveryPassEmailAction } from '../../actions/actions';

export default function RecoveryPassSendEmail() {
  const dispatch = useDispatch();
  const [back, setBack] = useState(null);
  const [submit, setSubmit] = useState(null);
  const [email, setEmail] = useState('');

  function handleBack() {
    setBack(true);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleSendEmail(e) {
    e.preventDefault();
    if (email === '111@gmail.com') {
      dispatch(recoveryPassEmailAction(email));
      setSubmit(true);
    }
  }

  if (submit) return <Redirect to="/recovery-send-code" />;
  if (back) return <Redirect to="/signin" />;

  return (
    <div>
      <IconButton size="medium" onClick={handleBack}>
        <BiArrowBack />
      </IconButton>
      <br />
      <h2>Forgot password</h2>
      <p>Please enter your email to reset password.</p>
      <br />
      <form onSubmit={handleSendEmail}>
        <TextField
          required
          error={false}
          label="Email"
          onChange={handleEmail}
          name="email"
          value={email}
          helperText="&nbsp;"
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
