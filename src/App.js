import './App.css';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import RecoveryPassword from './components/RecoveryPassword';
import SignUp from './components/SignUp';

export default function App() {
  // const dispatch = useDispatch();
  const signInRedux = useSelector((state) => state.authorization.isSignIn);

  console.log('rendering: App:', signInRedux);
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
        <Link className="a" to="/faq">
          Contact us
        </Link>
        {signInRedux || (
          <Link className="a" to="/signup">
            <button>Sign up</button>
          </Link>
        )}
        {signInRedux || (
          <Link className="a" to="/signin">
            <button>Sign in</button>
          </Link>
        )}
        {signInRedux && (
          <Link className="a" to="/signout">
            <button>Sign out</button>
          </Link>
        )}
        <hr />
        <Switch>
          <Route exact path="/">
            <div> You can {signInRedux ? `` : `'t`} write comments </div>
            <p>Email: 111@gmail.com</p>
            <p>Pasword: 111</p>
          </Route>{' '}
          <Route path="/about" />
          <Route path="/gallery" />
          <Route path="/faq" />
          <Route path="/contact" />
          <Route path="/signin" component={SignIn} />
          <Route path="/recovery" component={RecoveryPassword} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signout" component={SignOut} />
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
