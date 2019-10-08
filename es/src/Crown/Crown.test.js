import * as React from 'react';
import { shallow } from 'enzyme';
import Crown from './Crown';
describe('<Crown />', () => {
    test('renders', () => {
        const wrapper = shallow(React.createElement(Crown, null));
        expect(wrapper).toMatchSnapshot();
    });
});
