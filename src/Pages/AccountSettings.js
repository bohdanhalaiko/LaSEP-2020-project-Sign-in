import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function AccountSettings() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <FaUserCircle size="100%" />
          <div>Upload picture</div>
        </Grid>
        <Grid item xs={8}>
          <h2>Account settings</h2>

        </Grid>
      </Grid>
    </Container>
  );
}
