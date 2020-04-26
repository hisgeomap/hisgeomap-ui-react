import React from "react";
import SidePanel from "../..";
import { Button, Slider } from "antd";
export default function BasicSidePanel() {
    return (React.createElement(SidePanel, { offset: "-80%", forbidList: ["ant-slider"] },
        React.createElement("div", { className: "side-panel-demo" },
            React.createElement(Button, null, "Side Panel"),
            React.createElement(Slider, null))));
}
