import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Details from '../pages/Details'
import PageNotFound from '../pages/PageNotFound'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:date" component={Details} />
        <Route path="*" component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  )
}