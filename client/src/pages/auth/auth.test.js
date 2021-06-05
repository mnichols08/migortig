import React from 'react';
import { shallow } from 'enzyme';
import AuthPage from './index';

it('should render AuthPage component', () => {
  expect(shallow(<AuthPage />)).toMatchSnapshot();
});
