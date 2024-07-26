

import React from 'react'
import { Route, Routes as Switch} from 'react-router-dom'
import { AuthPages } from '../Lazy'
import { Auth } from '../../services/Path'
import { AuthProvider } from '../../contexts/auth/AuthContext'


export default function AuthRoutes() {
  return (
    <React.Fragment>
      <AuthProvider>
        <Switch>
          <Route path={Auth.register} element={<AuthPages.Register />}/>
          <Route path={Auth.login} element={<AuthPages.Login />}/>
        </Switch>
      </AuthProvider>
    </React.Fragment>
  )
}
