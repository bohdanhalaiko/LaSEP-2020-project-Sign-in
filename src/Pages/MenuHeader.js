import React from 'react';
import { useSelector } from 'react-redux';
import MenuAccount from '../Components/MenuHeader/MenuAccount';
import { Link } from 'react-router-dom';
import { Box, Button, Grid } from '@material-ui/core';

export default function MenuHeader() {
  const isSignInRedux = useSelector((state) => state.authorization.isSignIn);

  let buttonAutorization = (
    <>
      <Box component="span" m={0}>
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
      <Grid container spacing={1} justify="space-between" alignItems="center">
        <Grid item xs={8}>
          <Grid container spacing={2} justify="space-between">
            <Grid item xs={3}>
              <Box component="div">
                <Link className="a" to="/">
                  InpLAce
                </Link>
              </Box>
            </Grid>
            <Grid item>
              <Box component="div" m="auto">
                <Link className="a" to="/gallery">
                  Video gallery
                </Link>
              </Box>
            </Grid>

            <Grid item>
              <Box component="div" m="auto">
                <Link className="a" to="/about">
                  About us
                </Link>
              </Box>
            </Grid>

            <Grid item>
              <Box component="div" m="auto">
                <Link className="a" to="/faq">
                  FAQ
                </Link>
              </Box>
            </Grid>

            <Grid item>
              <Box component="div" m="auto">
                <Link className="a" to="/contact">
                  Contact us
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs="auto" justify="flex-end">
          {buttonAutorization}
        </Grid>
      </Grid>
    </>
  );
}
