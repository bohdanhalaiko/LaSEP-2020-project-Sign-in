import { INPUT_SENT_CODE, INPUT_SENT_CODE_RESET } from './types';

const initialState = { code: ['', '', '', '', ''] };

export default function inputSendCodeReducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_SENT_CODE:
      return { ...state, code: action.code };
    case INPUT_SENT_CODE_RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
