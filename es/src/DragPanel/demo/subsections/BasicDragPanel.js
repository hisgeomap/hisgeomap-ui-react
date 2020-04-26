import React from "react";
import DragPanel from "../..";
import { Button, Slider } from "antd";
export default function BasicDragPanel() {
    return (React.createElement(DragPanel, { direction: "vertical" },
        React.createElement(Button, null, "Drag Panel"),
        React.createElement(Slider, { onChange: () => { } })));
}
