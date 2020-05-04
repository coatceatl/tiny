import React from 'react'
import { Button, TextField, Grid, Typography, Container } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

export const SignPage = () => {
  return (
    <Container component="main" maxWidth="xs" className="sign">
      <div className="paper">
        <div className="logo">
          <img src="img/logo.svg" />
        </div>
        <Typography component="h1" variant="h5">
          Sign up and start shortening
        </Typography>
        <form className="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to="sign_in" variant="body2">
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}