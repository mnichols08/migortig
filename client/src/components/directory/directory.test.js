import React from 'react'
import { shallow } from 'enzyme'
import { Directory } from './index'

it('should render Directory component', () => {
  expect(shallow(<Directory sections={[]} />)).toMatchSnapshot()
})
