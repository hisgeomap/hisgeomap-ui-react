import * as React from 'react';
import { shallow } from 'enzyme';
import SidePanel from './SidePanel';
describe('<SidePanel />', () => {
    test('renders', () => {
        const wrapper = shallow(React.createElement(SidePanel, null));
        expect(wrapper).toMatchSnapshot();
    });
});
