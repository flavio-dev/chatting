import React from 'react'
import Header from '../Header'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

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
})
