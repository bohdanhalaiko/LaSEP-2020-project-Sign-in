import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignOut from './Pages/SignOut';
import SignUp from './Pages/SignUp';
import RecoveryPassSendEmail from './Components/SignIn/RecoveryPassSendEmail';
import RecoveryPassSendCode from './Components/SignIn/RecoveryPassSendCode';
import RecoveryPassChangePass from './Components/SignIn/RecoveryPassChangePass';
import MenuAccount from './Components/MenuHeader/MenuAccount';
import MenuHeader from './Pages/MenuHeader';
import AccountSettings from './Pages/AccountSettings';
import { Container } from '@material-ui/core';

export default function App() {
  // const dispatch = useDispatch();
  const isSignInRedux = useSelector((state) => state.authorization.isSignIn);

  return (
    <Router>
      <Container maxWidth="md">
        <MenuHeader />
        <hr />
        <Switch>
          <Route exact path="/">
            <div> You can{isSignInRedux ? `` : `'t`} write comments </div>
            <p>Email: 111@gmail.com</p>
            <p>Password: 111</p>
          </Route>
          <Route path="/about" />
          <Route path="/gallery" />
          <Route path="/faq" />
          <Route path="/contact" />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signout" component={SignOut} />
          <Route path="/recovery-send-email" component={RecoveryPassSendEmail} />
          <Route path="/recovery-send-code" component={RecoveryPassSendCode} />
          <Route path="/recovery-change-password" component={RecoveryPassChangePass} />
          <Route path="/menu-account" component={MenuAccount} />
          <Route path="/account-settings" component={AccountSettings} />
        </Switch>
      </Container>
    </Router>
  );
}

// function mapStateToProps(state) {
//   console.log('isSignIn', state.authorization.isSignIn);
//   return {
//     isSignIn: state.authorization.isSignIn,
//   };
// }

// export default connect(mapStateToProps, null)(App);
