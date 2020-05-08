import React from 'react'
import { Container, Card, CardContent, Typography, Link } from '@material-ui/core'

export const LinkCard = ({ link }) => {
  return (
    <Container maxWidth='md' component="section" className='container'>
      <Card className='root' elevation={3}>
        <CardContent>
          <Typography variant="h5" component="h1">
            Current Link
          </Typography>
          <Typography className='pos' color="textSecondary">
            Shorted link:
              <Link href={link.to} target='_blank'>{link.to}</Link>
          </Typography>
          <Typography className='pos' color="textSecondary">
            Original link:
          <Link href={link.from} target='_blank'>{link.from}</Link>
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