

import React from 'react'
import { Route, Routes as Switch} from 'react-router-dom'
import { LayoutPages } from '../Lazy'
import { Layout } from '../../services/Path'
import { AuthProvider } from '../../contexts/auth/AuthContext'
import ProtectedRoute from '../../components/protected/ProtectedRoute'


export default function LayoutRoutes() {
  return (
    <React.Fragment>
      <AuthProvider>
        <Switch>
          <Route path={Layout.main} element={
            <ProtectedRoute>
              <LayoutPages.Main />
            </ProtectedRoute>
          }/>
        </Switch>
      </AuthProvider>
    </React.Fragment>
  ) 
}
