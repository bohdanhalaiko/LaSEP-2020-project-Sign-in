import { Button, IconButton } from '@material-ui/core';
import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { recoveryPassCodeAction, recoveryPassResentCodeAction } from '../../actions/actions';
import { InputChangePassword } from './InputChangePassword';

export default function RecoveryPassChangePass() {
  const dispatch = useDispatch();
  const recoveryPassEmailRedux = useSelector((state) => state.recoveryPassword.email);
  const [back, setBack] = useState(null);
  const [submit, setSubmit] = useState(null);
  const [formValues, setFormValues] = useState({
    inputNewPassword: '',
    inputConfirmPassword: '',
    showNewPassword: false,
    showPassword: false,
  });
  function handleFormValues(e) {
    const value = e.target.value;
    setFormValues({ ...formValues, [e.target.name]: value });
  }
  function handleClickShowPassword() {
    setFormValues({ ...formValues, showPassword: !formValues.showPassword });
  }

  function handleBack() {
    setBack(true);
  }
  function handleSendCode(e) {
    e.preventDefault();
    const { inputNewPassword, inputConfirmPassword } = formValues;
    if (inputNewPassword === inputConfirmPassword) {
      setSubmit(true);
      // dispatch(recoveryPassCodeAction());
    }
  }

  if (submit) return <Redirect to="/signin" />;
  if (back) return <Redirect to="/recovery-send-code" />;

  return (
    <>
      <IconButton size="medium" onClick={handleBack}>
        <BiArrowBack />
      </IconButton>
      <br />
      <h2>Change password</h2>
      <br />
      <form onSubmit={handleSendCode}>
        <InputChangePassword
          inputLabel="New password"
          name="inputNewPassword"
          formValues={formValues}
          value={formValues.inputNewPassword}
          handleFormValues={handleFormValues}
          handleClickShowPassword={handleClickShowPassword}
        />
        <br/>
        <InputChangePassword
          inputLabel="Confirm new password"
          name="inputConfirmPassword"
          formValues={formValues}
          value={formValues.inputConfirmPassword}
          handleFormValues={handleFormValues}
          handleClickShowPassword={handleClickShowPassword}
        />
        <div>&nbsp;</div>
        <br />
        <Button variant="contained" color="primary" type="submit">
          Change password
        </Button>
        <br />
        <br />
      </form>
    </>
  );
}
