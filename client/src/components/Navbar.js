import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, List, ListItem } from '@material-ui/core'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const handleClick = e => {
    e.preventDefault()
    auth.logout()
    history.push('/login')
  }
  return (
    <AppBar className='header' position='fixed'>
      <Toolbar className='toolbar'>
        <Typography variant="h6" noWrap>
          Tiny
        </Typography>
        <nav>
          <List className='navList'>
            <ListItem button>
              <NavLink to='/create'>Create</NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to='/links'>Links</NavLink>
            </ListItem>
            <ListItem button>
              <Link to='/login' onClick={handleClick}>Logout</Link>
            </ListItem>
          </List>
        </nav>
      </Toolbar>
    </AppBar>
  )
}