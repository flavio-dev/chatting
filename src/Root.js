import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import AppContainer from 'routes/app/AppContainer'
import UserContainer from 'routes/user/UserContainer'

export const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' component={AppContainer} />
        <Route path='/:userId' component={UserContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object
}

export default Root
