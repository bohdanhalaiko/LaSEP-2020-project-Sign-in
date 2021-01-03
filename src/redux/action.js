import {
  INPUT_SENT_CODE,
  INPUT_SENT_CODE_RESET,
  RECOW_PASS_CHANGE_PASSWORD,
  RECOW_PASS_CODE,
  RECOW_PASS_EMAIL,
  SIGN_IN,
  SIGN_OUT,
} from './types';

export function signInAction(email) {
  // return {
  //   type: SIGN_IN,
  //   email,
  // };
  return async (dispatch) => {
    try {
      // const response = await fetch('https://');
      // const json = await response.json();
      // const email = json.email;
      dispatch({ type: SIGN_IN, email });
    } catch (e) {
      console.error('Incorect email');
    }
  };
}

export function signOutAction() {
  return {
    type: SIGN_OUT,
  };
}

export function recoveryPassEmailAction(email) {
  return {
    type: RECOW_PASS_EMAIL,
    email,
  };
}
export function recoveryPassCodeAction() {
  return {
    type: RECOW_PASS_CODE,
  };
}
export function recoveryPassResentCodeAction() {
  return {
    type: RECOW_PASS_CODE,
  };
}
export function recoveryPassChangePasswordAction() {
  return {
    type: RECOW_PASS_CHANGE_PASSWORD,
  };
}

export function inputSendCodeAction(code) {
  return {
    type: INPUT_SENT_CODE,
    code,
  };
}
export function inputSendCodeResetAction() {
  return {
    type: INPUT_SENT_CODE_RESET,
  };
}
