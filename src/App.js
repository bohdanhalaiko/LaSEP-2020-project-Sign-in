import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';
import RecoveryPassSendEmail from './components/RecoveryPassSendEmail';
import RecoveryPassSendCode from './components/RecoveryPassSendCode';
import RecoveryPassChangePass from './components/RecoveryPassChangePass';

export default function App() {
  // const dispatch = useDispatch();
  const isSignInRedux = useSelector((state) => state.authorization.isSignIn);

  console.log('rendering: App:', isSignInRedux);
  return (
    <Router>
      <div>
        <Link className="a" to="/">
          InpLAce
        </Link>
        <Link className="a" to="/about">
          About us
        </Link>
        <Link className="a" to="/gallery">
          Gallery
        </Link>
        <Link className="a" to="/faq">
          FAQ
        </Link>
        <Link className="a" to="/contact">
          Contact us
        </Link>
        {isSignInRedux || (
          <Link className="a" to="/signup">
            <button>Sign up</button>
          </Link>
        )}
        {isSignInRedux || (
          <Link className="a" to="/signin">
            <button>Sign in</button>
          </Link>
        )}
        {isSignInRedux && (
          <Link className="a" to="/signout">
            <button>Sign out</button>
          </Link>
        )}
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
        </Switch>
      </div>
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
