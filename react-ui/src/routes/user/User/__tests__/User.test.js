import React from 'react'
import User from '../User'
import { shallow, mount, setState, render } from 'enzyme'
import renderer from 'react-test-renderer'

describe('Testing User.js', () => {
  it('renders correctly with empty list of messages/users', () => {
    const setUserId = jest.fn()
    const setConnection = jest.fn()
    const sendMessage = jest.fn()
    const getInitialListUsers = jest.fn(() => [])
    const match = {
      params: {
        userId: 'userId'
      }
    }
    const tree = renderer.create(
      <User
        users={[]}
        messages={[]}
        match={match}
        setUserId={setUserId}
        setConnection={setConnection}
        sendMessage={sendMessage}
        getInitialListUsers={getInitialListUsers}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with empty list of messages but with users', () => {
    const setUserId = jest.fn()
    const setConnection = jest.fn()
    const sendMessage = jest.fn()
    const getInitialListUsers = jest.fn(() => [])
    const match = {
      params: {
        userId: 'userId'
      }
    }
    const tree = renderer.create(
      <User
        users={['secondUser', 'thirdUser']}
        messages={[]}
        match={match}
        setUserId={setUserId}
        setConnection={setConnection}
        sendMessage={sendMessage}
        getInitialListUsers={getInitialListUsers}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with list of users and list of messages', () => {
    const setUserId = jest.fn()
    const setConnection = jest.fn()
    const sendMessage = jest.fn()
    const getInitialListUsers = jest.fn(() => [])
    const match = {
      params: {
        userId: 'userId'
      }
    }
    const tree = renderer.create(
      <User
        users={['secondUser', 'thirdUser']}
        messages={[{
          from: 'userId',
          to: 'secondUser',
          message: 'the message'
        }]}
        match={match}
        setUserId={setUserId}
        setConnection={setConnection}
        sendMessage={sendMessage}
        getInitialListUsers={getInitialListUsers}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with list of users and list of messages to ALL', () => {
    const setUserId = jest.fn()
    const setConnection = jest.fn()
    const sendMessage = jest.fn()
    const getInitialListUsers = jest.fn(() => [])
    const match = {
      params: {
        userId: 'userId'
      }
    }
    const tree = renderer.create(
      <User
        users={['secondUser', 'thirdUser']}
        messages={[{
          from: 'userId',
          to: 'ALL',
          message: 'the message'
        }]}
        match={match}
        setUserId={setUserId}
        setConnection={setConnection}
        sendMessage={sendMessage}
        getInitialListUsers={getInitialListUsers}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
