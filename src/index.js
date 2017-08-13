import React from 'react'
import ReactDOM from 'react-dom'

import Root from './Root'
import createStore from './store'

const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

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
    />,
    MOUNT_NODE
  )
}

// ========================================================
// Go!
// ========================================================
render()
