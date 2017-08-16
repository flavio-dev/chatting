'use strict';

import React from 'react';
import Layout from '../Layout';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Layout><p>some children</p></Layout>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
