import React from 'react'
import Heart from '../Heart'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Heart />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
