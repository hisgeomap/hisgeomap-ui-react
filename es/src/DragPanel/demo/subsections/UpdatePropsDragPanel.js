import React, { useState } from "react";
import DragPanel from "../..";
import { Button } from "antd";
const mode1 = {
    states: [["0%", "0"], ["50%", "0%"]],
    state: 0,
    defaultState: 0,
    direction: "horizontal"
};
const mode2 = {
    state: 0,
    states: [["0", "0"], ["0", "40%"], ["0%", "90%"]],
    direction: "vertical",
    defaultState: 1
};
export default function UpdatePropsDragPanel() {
    const [mode, setMode] = useState(mode1);
    return (React.createElement("div", null,
        React.createElement(DragPanel, Object.assign({ className: "DragPanel-demo-backgound" }, mode),
            React.createElement(Button, { onClick: () => {
                    setMode(mode === mode1 ? mode2 : mode1);
                } }, "Switch Mode"))));
}
