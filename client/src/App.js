import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import { CssBaseline } from '@material-ui/core'

function App() {
  const routes = useRoutes(false)
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </>
  );
}

export default App;
