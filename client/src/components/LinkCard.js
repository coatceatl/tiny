import React from 'react'
import { Container, Card, CardContent, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const LinkCard = ({ link }) => {
  return (
    <Container maxWidth='md' component="section" className='container'>
      <Card className='root' elevation={3}>
        <CardContent>
          <Typography variant="h5" component="h1">
            Current Link
          </Typography>
          <Typography className='pos' color="textSecondary">
            Your link:
              <Link href={link.to} target='_blank' rel="noopener noreferrer" variant="body2">{link.to}</Link>
          </Typography>
          <Typography className='pos' color="textSecondary">
            From:
          <Link href={link.from} target='_blank' rel="noopener noreferrer">{link.from}</Link>
          </Typography>
          <Typography className='pos' color="textSecondary">
            Count:
          <span>{link.clicks}</span>
          </Typography>
          <Typography className='pos' color="textSecondary">
            Date:
          <span>{new Date(link.date).toLocaleDateString()}</span>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}