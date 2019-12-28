import * as React from 'react';
import { shallow } from 'enzyme';
import EditableText from './EditableText';

describe('<EditableText />', () => {
  test('renders', () => {
    const wrapper = shallow(<EditableText />);
    expect(wrapper).toMatchSnapshot();
  });
});
  