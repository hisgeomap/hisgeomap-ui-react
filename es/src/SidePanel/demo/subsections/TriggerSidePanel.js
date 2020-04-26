import React from "react";
import SidePanel from "../..";
import { Button } from "antd";
export default function TriggerSidePanel() {
    return (React.createElement(SidePanel, { offset: "-80%", trigger: ".side-panel-trigger" },
        React.createElement("div", { className: "side-panel-demo" },
            React.createElement(Button, { disabled: true }, "Side Panel"),
            React.createElement(Button, { className: "side-panel-trigger" }, "Trigger"))));
}
