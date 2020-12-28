import { RECOW_PASS_EMAIL, SIGN_IN, SIGN_OUT } from './types';

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

export function recovPassEmailAction() {
  return {
    type: RECOW_PASS_EMAIL,
  };
}
