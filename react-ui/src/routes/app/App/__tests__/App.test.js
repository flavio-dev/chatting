import React from 'react'
import App from '../App'
import { shallow, mount, setState } from 'enzyme'
import renderer from 'react-test-renderer'

describe('Testing App.js', () => {
  it('renders correctly with empty list of users', () => {
    const getInitialListUsers = jest.fn(() => [])
    const redirectToUser = jest.fn()
    const tree = renderer.create(
      <App
        user={[]}
        numUsers={0}
        getInitialListUsers={getInitialListUsers}
        redirectToUser={redirectToUser}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with some users already connected', () => {
    const getInitialListUsers = jest.fn()
    const redirectToUser = jest.fn()
    const tree = renderer.create(
      <App
        user={['user']}
        numUsers={1}
        getInitialListUsers={getInitialListUsers}
        redirectToUser={redirectToUser}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('changes the class when starting to type', () => {
    const getInitialListUsers = jest.fn()
    const redirectToUser = jest.fn()
    const wrapper = shallow(
      <App
        user={[]}
        numUsers={0}
        getInitialListUsers={getInitialListUsers}
        redirectToUser={redirectToUser}
      />
    )
    expect(wrapper.find('.AppNotTyped').length).toBe(1)
    expect(wrapper.find('.App').length).toBe(0)
    wrapper.setState({userId: 'text'})
    expect(wrapper.find('.AppNotTyped').length).toBe(0)
    expect(wrapper.find('.App').length).toBe(1)
  })
})
