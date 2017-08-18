import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Notifications from 'react-notify-toast';

import AppContainer from 'routes/app/AppContainer'
import UserContainer from 'routes/user/UserContainer'
import Layout from 'components/Layout'

import 'index.css'

export const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Notifications />
        <Layout>
          <Switch>
            <Route exact path='/' component={AppContainer} />
            <Route path='/:userId' component={UserContainer} />
          </Switch>
        </Layout>
      </div>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object
}

export default Root
