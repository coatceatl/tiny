import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/authHook'
import { AuthContext } from './context/AuthContext'
import { CssBaseline } from '@material-ui/core'

function App() {
  const { token, login, logout, userId } = useAuth()
  const signedIn = !!token
  console.log(signedIn)
  const routes = useRoutes(signedIn)
  console.log('Token: ', token)
  console.log('isSignedIn: ', signedIn)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, signedIn
    }}>
      <CssBaseline />
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
