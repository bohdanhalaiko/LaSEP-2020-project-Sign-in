import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import PasswordEmail from './PasswordEmail';

export default function RecoveryPassword() {
  const recoeryPassRedux = useSelector((state) => state.recoveryPassword);

  return (
    <>
      <h2>Forgot password</h2>
      {recoeryPassRedux === 'email' && <PasswordEmail/>}
    </>
  );
}
