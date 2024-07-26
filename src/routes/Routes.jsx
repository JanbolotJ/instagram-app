

import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { Routers } from '../pages'
import { Apps } from '../services/Path'

export default function Routes() {
  return (
    <React.Fragment>
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
                <Route path={Apps.accounts} element={<Routers.AuthRoutes />}/>
                <Route path={Apps.layout} element={<Routers.LayoutRoutes />}/> 
            </Switch>
        </React.Suspense>
    </React.Fragment>
  )
}
