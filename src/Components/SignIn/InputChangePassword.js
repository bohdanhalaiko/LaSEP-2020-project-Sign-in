import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import React from 'react';

export function InputChangePassword(props) {
  return (
    <FormControl>
      <InputLabel>{props.inputLabel}</InputLabel>
      <Input
        name={props.name}
        type={props.formValues.showPassword ? 'text' : 'password'}
        value={props.value}
        onChange={props.handleFormValues}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              name="showPassword"
              aria-label="toggle password visibility"
              onClick={props.handleClickShowPassword}
            >
              {props.formValues.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
