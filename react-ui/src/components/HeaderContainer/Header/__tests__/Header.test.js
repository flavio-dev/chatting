import React from 'react'
import Header from '../Header'
import renderer from 'react-test-renderer'

describe('Testing Header.js', () => {
  it('renders correctly', () => {
    const disconnecting = jest.fn()
    const tree = renderer
      .create(<Header disconnecting={disconnecting} userId='userId' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
