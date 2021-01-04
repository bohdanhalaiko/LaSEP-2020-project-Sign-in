import { Button, IconButton, Link } from '@material-ui/core';
import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import {
  inputSendCodeResetAction,
  recoveryPassCodeAction,
  recoveryPassResentCodeAction,
} from '../../actions/actions';
import { InputSendCode } from './InputSendCode';

export default function RecoveryPassCode() {
  const dispatch = useDispatch();
  const inppuSendCodeRedux = useSelector((state) => state.inputSendCode.code);
  const recoveryPassEmailRedux = useSelector((state) => state.recoveryPassword.email);
  const [back, setBack] = useState(null);
  const [submit, setSubmit] = useState(null);
  const [inputFocus, setInputFocus] = useState(false);

  function handleBack() {
    setBack(true);
  }
  function handleSendCode(e) {
    e.preventDefault();
    if (+inppuSendCodeRedux.join('') === 11111) {
      dispatch(recoveryPassCodeAction(inppuSendCodeRedux));
      setSubmit(true);
    }
  }
  function handleResentCode(e) {
    e.preventDefault();
    dispatch(inputSendCodeResetAction());
    setInputFocus(!inputFocus);
  }

  if (submit) return <Redirect to="/recovery-change-password" />;
  if (back) return <Redirect to="/recovery-send-email" />;

  return (
    <div>
      <IconButton size="medium" onClick={handleBack}>
        <BiArrowBack />
      </IconButton>
      <br />
      <h2>Forgot password</h2>
      <p>
        <span>Please check your email {recoveryPassEmailRedux}</span>
        <br />
        <span>for the verification code we just sent</span>
      </p>
      <br />
      <form onSubmit={handleSendCode}>
        <InputSendCode inputFocus={inputFocus} />
        <div>&nbsp;</div>
        <br />
        <Button variant="contained" color="primary" type="submit">
          Done
        </Button>
        <br />
        <br />
        <Link href="#" onClick={handleResentCode}>
          Resend code
        </Link>
      </form>
    </div>
  );
}
