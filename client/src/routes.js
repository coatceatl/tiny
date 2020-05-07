import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { SignPage } from './pages/SignPage'
import { LoginPage } from './pages/LoginPage'

export const useRoutes = signedIn => {
  if (signedIn) {
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
      <Route path='/login' exact>
        <LoginPage />
      </Route>
      <Route path='/' exact>
        <SignPage />
      </Route>
      <Redirect to='/login' />
    </Switch>
  )
}