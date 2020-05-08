import React from 'react'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, Typography, TableBody } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <Typography component='h1' variant='h4' className='empty'>No links yet</Typography>
  }
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table className='table' aria-label="customized table">
        <TableHead className='header'>
          <TableRow>
            <TableCell>Original Link</TableCell>
            <TableCell>Shorted Link</TableCell>
            <TableCell align="right">Open</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='body'>
          {links.map(link => {
            return (
              <TableRow key={link._id}>
                <TableCell>{link.from}</TableCell>
                <TableCell>{link.to}</TableCell>
                <TableCell align="right">
                  <Link to={`/detail/${link._id}`}>Open</Link>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}