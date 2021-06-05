import React from 'react'
import { shallow } from 'enzyme'
import { CustomButton } from './index'

it('should render CustomButton component', () => {
  expect(shallow(<CustomButton />)).toMatchSnapshot()
})
