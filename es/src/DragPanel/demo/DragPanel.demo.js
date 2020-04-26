import React from "react";
import DemoPage from "../../DemoPage";
import code from "./subsections/subsections.json";
import BasicDragPanel from "./subsections/BasicDragPanel";
import StateControlDragPanel from "./subsections/StateControlDragPanel";
import HorizontalDragPanel from "./subsections/HorizontalDragPanel";
import HandleDragPanel from "./subsections/HandleDragPanel";
import TriggerDragPanel from "./subsections/TriggerDragPanel";
import StateChangeDragPanel from "./subsections/StateChangeDragPanel";
import UpdatePropsDragPanel from "./subsections/UpdatePropsDragPanel";
const components = [
    {
        title: "Basic Usage",
        component: BasicDragPanel,
        code: code.BasicDragPanel
    },
    {
        title: "State Control",
        component: StateControlDragPanel,
        code: code.StateControlDragPanel
    },
    {
        title: "DragPanel - Horizontal",
        component: HorizontalDragPanel,
        code: code.HorizontalDragPanel
    },
    {
        title: "DragPanel - Handle",
        component: HandleDragPanel,
        code: code.HandleDragPanel
    },
    {
        title: "DragPanel - Trigger",
        component: TriggerDragPanel,
        code: code.TriggerDragPanel
    },
    {
        title: "DragPanel - State Change",
        component: StateChangeDragPanel,
        code: code.StateChangeDragPanel
    },
    {
        title: "DragPanel - Update on Props",
        component: UpdatePropsDragPanel,
        code: code.UpdatePropsDragPanel
    }
];
export default function DragPanelDemo() {
    return (React.createElement(DemoPage, { className: "large absolute", name: "DragPanel", components: components }));
}
