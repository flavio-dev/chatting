'use strict'

import React from 'react'
import UserWindow from '../UserWindow'
import renderer from 'react-test-renderer'

describe('Testing UserWindow.js', () => {
  it('renders correctly with no message', () => {
    const messages = []
    const tree = renderer
      .create(<UserWindow
        title='title'
        to='someone'
        you='me'
        messages={messages}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with a message from me', () => {
    const messages = [
      {
        from: 'me',
        to: 'someone',
        message: 'the message'
      }
    ]
    const tree = renderer
      .create(<UserWindow
        title='title'
        to='someone'
        you='me'
        messages={messages}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with a message from someone', () => {
    const messages = [
      {
        from: 'someone',
        to: 'me',
        message: 'the message two'
      }
    ]
    const tree = renderer
      .create(<UserWindow
        title='title'
        to='someone'
        you='me'
        messages={messages}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
