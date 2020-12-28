import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signOutAction } from '../redux/action';

export default function SignOut() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOutAction());
  });

  console.log('rendering: SignOut');
  return <Redirect to="/" />;
}
