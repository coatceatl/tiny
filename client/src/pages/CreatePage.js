import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import { Container, Grid, TextField, Button } from '@material-ui/core'
import axios from 'axios'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const [link, setLink] = useState('')

  const handleKeyPress = async e => {
    if (e.key === 'Enter') {
      try {
        const res = await axios.post(
          '/api/links/generate',
          { from: link },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`
            }
          }
        )
        history.push(`/detail/${res.data.link._id}`)
      } catch (e) { }
    }
  }
  const handleClick = async e => {
    try {
      const res = await axios.post(
        '/api/links/generate',
        { from: link },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        }
      )
      history.push(`/detail/${res.data.link._id}`)
    } catch (e) { }
  }
  return (
    <Container component="section" maxWidth="md" className="container">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <TextField
            variant="outlined"
            fullWidth
            id="link"
            label="Shorten your link"
            name="link"
            value={link}
            onChange={e => setLink(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="btn btn-submit"
            onClick={handleClick}
          >
            Shorten
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}