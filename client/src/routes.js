import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { SignPage } from './pages/SignPage'

export const useRoutes = signesIn => {
  if (signesIn) {
    return (
      <Switch>
        <Route path='/links' exact>
          <LinksPage />
        </Route>
        <Route path='/create' exact>
          <CreatePage />
        </Route>
        <Route path='/detail/:id'>
          <DetailPage />
        </Route>
        <Redirect to='create' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/' exact>
        <SignPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}