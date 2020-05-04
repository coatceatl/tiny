import React, { useState } from 'react'
import { Button, TextField, Grid, Typography, Container } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export const SignPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      email: form.email,
      password: form.password
    }
    await axios.post('url', data)
  }

  return (
    <Container component="main" maxWidth="xs" className="sign">
      <div className="paper">
        <div className="logo">
          <img src="img/logo.svg" alt="Tiny" />
        </div>
        <Typography component="h1" variant="h5">
          Sign up and start shortening
        </Typography>
        <form className="form" onSubmit={handleSubmit}>
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="btn btn-submit"
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