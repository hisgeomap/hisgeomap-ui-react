import React from "react";
import DemoPage from "../../DemoPage";
import BasicDragPanel from "../../DragPanel/demo/subsections/BasicDragPanel";
import code from "./subsections/subsections.json";
import TriggerSidePanel from "./subsections/TriggerSidePanel";
import DefaultExpandSidePanel from "./subsections/DefaultExpandSidePanel";
const components = [
    {
        title: "Basic SidePanel",
        component: BasicDragPanel,
        code: code.BasicSidePanel
    },
    {
        title: "SidePanel Trigger",
        component: TriggerSidePanel,
        code: code.TriggerSidePanel
    },
    {
        title: "SidePanel Default Expand",
        component: DefaultExpandSidePanel,
        code: code.DefaultExpandSidePanel
    }
];
export default function SidePanelDemo() {
    return (React.createElement(DemoPage, { className: "large absolute", name: "SidePanel  (Will be Deprecated)", components: components }));
}
