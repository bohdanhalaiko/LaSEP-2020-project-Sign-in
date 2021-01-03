import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInAction } from '../redux/action';
import { IconContext } from 'react-icons';

export default function SignIn() {
  const dispatch = useDispatch();
  const signInRedux = useSelector((state) => state.authorization.isSignIn);
  const [formValues, setFormValues] = useState({
    inputEmail: '',
    inputPassword: '',
    showPassword: false,
    rememberMe: false,
  });

  function handleFormValues(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormValues({ ...formValues, [e.target.name]: value });
  }
  function handleClickShowPassword() {
    setFormValues({ ...formValues, showPassword: !formValues.showPassword });
  }
  function handleSignIn(e) {
    e.preventDefault();
    console.log('перевірка');
    const { inputEmail } = formValues;
    if (formValues.inputEmail === '111@gmail.com' && formValues.inputPassword === '111') {
      setFormValues({
        inputEmail: '',
        inputPassword: '',
        showPassword: false,
        rememberMe: false,
      });
      dispatch(signInAction(inputEmail));
    } else {
      setFormValues((state) => ({
        ...state,
        inputPassword: '',
      }));
      return alert('incorect email or password');
    }
  }

  function responseGoogle(response) {
    console.log(response);
  }
  function responseFacebook(response) {
    console.log(response);
  }
  if (signInRedux) return <Redirect to="/" />;

  return (
    <form onSubmit={handleSignIn}>
      <h2>Sign in</h2>
      <TextField
        required
        label="Work email address"
        onChange={handleFormValues}
        name="inputEmail"
        value={formValues.inputEmail}
      />
      <br />
      <br />
      <FormControl>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          name="inputPassword"
          type={formValues.showPassword ? 'text' : 'password'}
          value={formValues.inputPassword}
          onChange={handleFormValues}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                name="showPassword"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <br />
      <br />
      <FormControlLabel
        value="end"
        label="Remember me"
        labelPlacement="end"
        control={
          <Checkbox
            color="primary"
            onChange={handleFormValues}
            name="rememberMe"
            checked={formValues.rememberMe}
          />
        }
      />

      <Link className="a" to="/recovery-send-email">
        Forgot password?
      </Link>

      <br />
      <br />
      <Button variant="contained" color="primary" type="submit">
        Sign in
      </Button>
      <br />
      <br />
      <p>or</p>
      <br />
      <IconContext.Provider value={{ size: '2em', color: 'dark-blue' }}>
        <div>
          <FcGoogle />
          <FaFacebookF />
        </div>
      </IconContext.Provider>

      {/* <GoogleLogin
            clientId="_667687022973-4bsuh81gfjge2t96pjhffq4k9ovjfbpv.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <FacebookLogin
          appId="1088597931155576"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
            textButton=""
          /> */}
      <br />
      <br />
      <span>Don't have an account yet? </span>
      <Link className="a" to="/signup">
        Sign up
      </Link>
    </form>
  );
}

// function mapStateToProps(state) {
//   console.log(state.isSignIn);
//   return {
//     isSignIn: state.isSignIn,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return { signInRedux: (email) => dispatch({ type: 'SIGNIN', email }) };
// }

// connect(mapStateToProps, mapDispatchToProps)(SignIn);
