import React from 'react'
import Immutable from 'immutable'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import { shallow, setState, render } from 'enzyme'
import { Provider } from 'react-redux'

import Layout from '../Layout'

describe('Layout.js test suite', () => {
  it('renders correctly', () => {
    const mockStore = configureStore()
    const store = mockStore(
      Immutable.Map({
        userReducers: Immutable.Map({
          userId: 'userId'
        })
      })
    )
    const tree = renderer
      .create(<Provider store={store}>
        <Layout><p>some children</p></Layout>
      </Provider>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly... using shallow copy', () => {
    const wrapper = shallow(
      <Layout><p className='bla'>some children</p></Layout>
    )
    expect(wrapper.find('.bla').length).toBe(1)
  })
})
