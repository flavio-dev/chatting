import React from 'react'
import Immutable from 'immutable'
import Header from '../Header'
import HeaderContainer from '../../HeaderContainer'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { disconnecting as disconnectingAction } from 'store/actions'
import configureMockStore from 'redux-mock-store'

describe('Testing Header.js', () => {
  it('renders correctly with logout button', () => {
    const disconnecting = jest.fn()
    const tree = renderer
      .create(<Header disconnecting={disconnecting} userId='userId' connectionStatus='connected' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without logout button', () => {
    const disconnecting = jest.fn()
    const tree = renderer
      .create(<Header disconnecting={disconnecting} userId='userId' connectionStatus='disconnected' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows the logout button is connected', () => {
    const disconnecting = jest.fn()
    const wrapper = mount(
      <Header disconnecting={disconnecting} userId='userId' connectionStatus='connected' />
    )

    expect(wrapper.find('button').length).toBe(1)
  })

  it('hides the logout button is disconnected', () => {
    const disconnecting = jest.fn()
    const wrapper = mount(
      <Header disconnecting={disconnecting} userId='userId' connectionStatus='disconnected' />
    )

    expect(wrapper.find('button').length).toBe(0)
  })

  it('triggers an function passing userId as param when clicking on the button', () => {
    const disconnecting = jest.fn()
    const wrapper = mount(
      <Header disconnecting={disconnecting} userId='userId' connectionStatus='connected' />
    )
    expect(disconnecting.mock.calls.length).toBe(0)
    wrapper.find('button').simulate('click')
    expect(disconnecting.mock.calls.length).toBe(1)
    expect(disconnecting.mock.calls[0][0]).toBe('userId')
  })

  it('triggers the DISCONNECTED action', () => {
    const mockStore = configureMockStore();
    const store = mockStore(
      Immutable.Map({
        appReducers: Immutable.Map({
          connectionStatus: 'connected'
        }),
        userReducers: Immutable.Map({
          userId: 'userId'
        })
      })
    )

    const wrapper = mount(
      <HeaderContainer store={store} />
    )

    wrapper.find('button').simulate('click')
    const actions = store.getActions()
    expect(actions[0]).toEqual(disconnectingAction('userId'))
  })
})
