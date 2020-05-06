import React, { useState, useContext } from 'react'
import { Button, TextField, Grid, Typography, Container } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { AuthContext } from '../context/AuthContext';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const SignPage = () => {
  const auth = useContext(AuthContext)
  console.log('Auth: ', auth)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/users/', { ...form })
      console.log(res.data)
      setMessage(res.data.message)
      setOpen(true)
      setStatus(true)
    } catch (e) {
      console.log('Error: ', e.response);
      setMessage(e.response.data.message)
      setOpen(true)
      setStatus(false)
    }
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
              <NavLink to="/login" variant="body2">
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
        >
          <Alert severity={status ? 'success' : 'warning'}>
            {message}
          </Alert>
        </Snackbar>
      </div>
    </Container>
  );
}