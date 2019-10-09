import * as React from 'react';
import { shallow } from 'enzyme';
import SideNotification from './SideNotification';
describe('<SideNotification />', () => {
    test('renders', () => {
        const wrapper = shallow(React.createElement(SideNotification, null));
        expect(wrapper).toMatchSnapshot();
    });
});
