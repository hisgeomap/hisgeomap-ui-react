import React from "react";
import DemoPage from "../../DemoPage";
import BasicSideNotification from "./subsections/BasicSideNotification";
import code from "./subsections/subsections.json";
const components = [
    {
        title: "Basic SideNotification",
        component: BasicSideNotification,
        code: code.BasicSideNotification
    }
];
export default function SideNotificationDemo() {
    return React.createElement(DemoPage, { name: "SideNotification", components: components });
}
