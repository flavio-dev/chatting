import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

it('renders correctly with empty list of users', () => {
  const getInitialListUsers = jest.fn(() => []);
  const redirectToUser = jest.fn();
  const tree = renderer.create(
    <App
      user={[]}
      numUsers={0}
      getInitialListUsers={getInitialListUsers}
      redirectToUser={redirectToUser}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with some users already connected', () => {
  const getInitialListUsers = jest.fn(() => ['username']);
  const redirectToUser = jest.fn();
  const tree = renderer.create(
    <App
      user={[]}
      numUsers={0}
      getInitialListUsers={getInitialListUsers}
      redirectToUser={redirectToUser}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with some users already connected', () => {
  const getInitialListUsers = jest.fn();
  const redirectToUser = jest.fn();
  const tree = renderer.create(
    <App
      user={['user']}
      numUsers={1}
      getInitialListUsers={getInitialListUsers}
      redirectToUser={redirectToUser}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('changes the class when starting to type', () => {
  const getInitialListUsers = jest.fn();
  const redirectToUser = jest.fn();
  const component = renderer.create(
    <App
      user={[]}
      numUsers={0}
      getInitialListUsers={getInitialListUsers}
      redirectToUser={redirectToUser}
    />
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually calling typing
  let event = {
    target: {
      value: 'text'
    }
  }
  console.log('tree = ', tree);
  tree.props.typing(event);
  // re-rendering
  expect(tree).toMatchSnapshot();

  // manually retriggering the empty field
  event.target.value = ''
  tree.props.typing(event);
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
