import React from "react";
import DragPanel from "../..";
import { Button } from "antd";
export default function HandleDragPanel() {
    return (React.createElement("div", null,
        React.createElement(DragPanel, { direction: "vertical", states: [["0%", "0"], ["0%", "40%"], ["0%", "90%"]], handle: ".DragPanel-demo-handle", defaultState: 2 },
            React.createElement(Button, { className: "DragPanel-demo-handle" }, "Handle")),
        React.createElement(DragPanel, { direction: "vertical", handle: ".DragPanel-demo-handle2", className: "DragPanel-demo-backgound" },
            React.createElement(Button, { className: "DragPanel-demo-handle2" }, "Handle"))));
}
