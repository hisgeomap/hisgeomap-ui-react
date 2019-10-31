import * as React from "react";
import { shallow } from "enzyme";
import DragPanel from "./DragPanel";

describe("<BottomUpPanel />", () => {
    test("renders", () => {
        const wrapper = shallow(<DragPanel />);
        expect(wrapper).toMatchSnapshot();
    });
});
