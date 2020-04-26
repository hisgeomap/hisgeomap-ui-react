import React from "react";
import DragPanel from "../..";
export default function StateControlDragPanel() {
    return (React.createElement(React.Fragment, null,
        React.createElement(DragPanel, { direction: "vertical", states: [["0", "0"], ["0", "40%"], ["20%", "70%"]], defaultState: 2 }),
        React.createElement(DragPanel, { className: "DragPanel-demo-backgound", direction: "vertical", states: [["0", "0"], ["0", "40%"], ["20%", "70%"]], defaultState: 2 })));
}
