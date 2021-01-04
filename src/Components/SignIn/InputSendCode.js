import { TextField } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {inputSendCodeAction, inputSendCodeResetAction} from '../../actions/actions';

function inputFocus(node) {
  node.focus();
  node.select();
}

export function InputSendCode(props) {
  const dispatch = useDispatch();
  const inppuSendCodeRedux = useSelector((state) => state.inputSendCode.code);
  const inputRef = useRef({});
  const activeInput = useRef(0);

  useEffect(() => {
    inputFocus(inputRef.current[0]);
    return () => dispatch(inputSendCodeResetAction());
  }, [props.inputFocus]);

  function handleInput(e) {
    let target = parseInt(e.target.value);
    target = Number.isNaN(target) ? '' : target.toString().slice(0, 1);
    const parseInput = [...inppuSendCodeRedux];
    parseInput[+e.target.name] = target;
    dispatch(inputSendCodeAction(parseInput));
    if (target === '') return true;
    activeInput.current = +e.target.name;
    let nextActiveInput = activeInput.current;
    activeInput.current = ++nextActiveInput < 5 ? nextActiveInput : 0;
    inputFocus(inputRef.current[activeInput.current]);
    console.log(activeInput.current);
  }

  return (
    <>
      {inppuSendCodeRedux.map((el, i) => (
        <TextField
          key={i.toString()}
          inputRef={(e) => (inputRef.current[i] = e)}
          className="recovery send-code"
          required
          label=""
          onChange={handleInput}
          name={i.toString()}
          value={el}
        />
      ))}
    </>
  );
}
