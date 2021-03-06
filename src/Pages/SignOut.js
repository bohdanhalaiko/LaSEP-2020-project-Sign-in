import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signOutAction } from '../actions/actions';

export default function SignOut() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOutAction());
  });

  console.log('rendering: SignOut');
  return <Redirect to="/" />;
}
