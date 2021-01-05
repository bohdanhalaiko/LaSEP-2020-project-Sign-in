import React from 'react';
import { useSelector } from 'react-redux';
import MenuAccount from '../Components/MenuHeader/MenuAccount';
import { Link } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';

export default function MenuHeader() {
  const isSignInRedux = useSelector((state) => state.authorization.isSignIn);
  let buttonAutorization = (
    <>
      <Box component="span" m={1}>
        <Link className="a" to="/signup">
          <Button variant="contained">Sign up</Button>
        </Link>
      </Box>
      <Box component="span" m={1}>
        <Link className="a" to="/signin">
          <Button variant="contained" color="primary">
            Sign in
          </Button>
        </Link>
      </Box>
    </>
  );

  if (isSignInRedux) buttonAutorization = <MenuAccount />;

  return (
    <>
      <Box component="span" m={1}>
        <Link className="a" to="/">
          InpLAce
        </Link>
      </Box>
      <Box component="span" m={1}>
        <Link className="a" to="/gallery">
          Video gallery
        </Link>
      </Box>
      <Box component="span" m={1}>
        <Link className="a" to="/about">
          About us
        </Link>
      </Box>
      <Box component="span" m={1}>
        <Link className="a" to="/faq">
          FAQ
        </Link>
      </Box>
      <Box component="span" m={1}>
        <Link className="a" to="/contact">
          Contact us
        </Link>
      </Box>
      {buttonAutorization}
    </>
  );
}
