import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import Root from './Root'
import createStore from './store'

const initialState = window.___INITIAL_STATE__
const history = createHistory()
const store = createStore(initialState, history)

// ========================================================
// Developer Tools Setup
// ========================================================
if (window.devToolsExtension) {
  window.devToolsExtension.open()
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <Root
      store={store}
      history={history}
    />,
    MOUNT_NODE
  )
}

// ========================================================
// Go!
// ========================================================
render()
