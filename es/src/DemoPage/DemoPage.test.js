import * as React from 'react';
import { shallow } from 'enzyme';
import DemoPage from './DemoPage';
describe('<DemoPage />', () => {
    test('renders', () => {
        const wrapper = shallow(React.createElement(DemoPage, null));
        expect(wrapper).toMatchSnapshot();
    });
});
