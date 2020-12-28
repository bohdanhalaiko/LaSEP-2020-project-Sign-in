import { RECOW_PASS_CODE, RECOW_PASS_EMAIL, RECOW_PASS_PASSWORD } from './types';

const initialState = 'email';

function recoveryPassReducer(state = initialState, action) {
  switch (action.type) {
    case RECOW_PASS_EMAIL:
      return 'code';
    case RECOW_PASS_CODE:
      return 'password';
    case RECOW_PASS_PASSWORD:
      return 'email';
    default:
      return state;
  }
}

export default recoveryPassReducer;
