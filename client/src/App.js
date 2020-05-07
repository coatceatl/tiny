import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/authHook'
import { AuthContext } from './context/AuthContext'
import { CssBaseline } from '@material-ui/core'
import { Navbar } from './components/Navbar';

function App() {
  const { token, login, logout, userId } = useAuth()
  const signedIn = !!token
  const routes = useRoutes(signedIn)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, signedIn
    }}>
      <CssBaseline />
      <BrowserRouter>
        {signedIn && <Navbar />}
        <main>
          {routes}
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
