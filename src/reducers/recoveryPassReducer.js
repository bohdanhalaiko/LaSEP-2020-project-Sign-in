import { RECOW_PASS_CHANGE_PASSWORD, RECOW_PASS_CODE, RECOW_PASS_EMAIL } from '../constants/types';

const initialState = { email: '', code: '', newPassword: '' };

export default function recoveryPassReducer(state = initialState, action) {
  switch (action.type) {
    case RECOW_PASS_EMAIL:
      return { ...state, email: action.email };
    case RECOW_PASS_CODE:
      return { ...state, code: action.code };
    case RECOW_PASS_CHANGE_PASSWORD:
      return { ...state, newPassword: action.password };
    default:
      return state;
  }
}
