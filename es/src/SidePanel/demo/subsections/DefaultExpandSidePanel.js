import React from "react";
import SidePanel from "../..";
import { Button } from "antd";
export default function DefaultExpandSidePanel() {
    return (React.createElement(SidePanel, { offset: "-80%", defaultExpand: true },
        React.createElement("div", { className: "side-panel-demo" },
            React.createElement(Button, { disabled: true }, "Side Panel"))));
}
