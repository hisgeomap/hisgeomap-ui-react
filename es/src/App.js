import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SidePanel } from ".";
import { Menu } from "antd";
import { Button } from "antd";
import packageJSON from "../package.json";
import DragPanelDemo from "./DragPanel/demo/DragPanel.demo";
import SidePanelDemo from "./SidePanel/demo/SidePanel.demo";
import SideNotificationDemo from "./SideNotification/demo/SideNotification.demo";
import SearchDemo from "./Search/demo/Search.demo";
import EditableTextDemo from "./EditableText/demo/EditableText.demo";
const links = [
    "Home",
    "Search",
    "SidePanel",
    // "Crown",
    "SideNotification",
    "DragPanel",
    "EditableText"
];
const App = () => {
    const [title, setTitle] = useState(window.location.pathname.substr(window.location.pathname.lastIndexOf("/") + 1));
    return (React.createElement("div", null,
        React.createElement(Router, { basename: "/" + packageJSON.name },
            React.createElement(SidePanel, { offset: "-250px", className: "navigation", trigger: ".menu-btn" },
                React.createElement(Menu, { className: "menu", selectedKeys: [title.toLowerCase()] }, links.map(e => (React.createElement(Menu.Item, { key: e.toLowerCase() },
                    React.createElement(Link, { to: "/" + e, onClick: () => setTitle(e) }, e))))),
                React.createElement("div", { className: "btn-group" },
                    React.createElement(Button, { className: "menu-btn" }, "Menu"))),
            React.createElement("div", { className: "app fixed-layout-content" },
                React.createElement(Switch, null,
                    React.createElement(Route, { path: "/Search" },
                        React.createElement(SearchDemo, null)),
                    React.createElement(Route, { path: "/SidePanel" },
                        React.createElement(SidePanelDemo, null)),
                    React.createElement(Route, { path: "/SideNotification" },
                        React.createElement(SideNotificationDemo, null)),
                    React.createElement(Route, { path: "/DragPanel" },
                        React.createElement(DragPanelDemo, null)),
                    React.createElement(Route, { path: "/EditableText" },
                        React.createElement(EditableTextDemo, null)))))));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
