import React, { useState } from "react";
import DragPanel from "../..";
import { Button } from "antd";
export default function StateChangeDragPanel() {
    const [state, setState] = useState(2);
    return (React.createElement("div", null,
        React.createElement(DragPanel, { direction: "horizontal", className: "DragPanel-demo-backgound", states: [["0%", "0"], ["20%", "0%"], ["40%", "0%"]], trigger: ".DragPanel-demo-trigger3", onTrigger: () => 1, state: state, onStateChange: (prev, cur) => setState(cur), defaultState: 0 },
            React.createElement(Button, { className: "DragPanel-demo-trigger3" }, "Trigger")),
        React.createElement(DragPanel, { direction: "vertical", states: [["0", "0"], ["0", "40%"], ["0%", "90%"]], state: state, onStateChange: (prev, cur) => {
                setState(cur);
            }, defaultState: 2 },
            React.createElement(Button, { onClick: () => setState(1) }, "Change to State 1"))));
}
