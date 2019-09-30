import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Search, SidePanel } from ".";
import { Menu } from "antd";
import { Button, Slider } from "antd";
import DemoPage from "./DemoPage";
const data = {
    Search: {
        dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => "AutoComplete " + e)
    }
};
const links = ["Home", "Search", "SidePanel"];
const App = () => {
    const [title, setTitle] = useState(window.location.pathname.substr(window.location.pathname.lastIndexOf("/") + 1));
    return (React.createElement("div", { className: "fixed-layout" },
        React.createElement(Router, null,
            React.createElement(SidePanel, { offset: "-250px", className: "navigation", trigger: ".menu-btn" },
                React.createElement(Menu, { className: "menu", selectedKeys: [title.toLowerCase()] }, links.map(e => (React.createElement(Menu.Item, { key: e.toLowerCase() },
                    React.createElement(Link, { to: "/" + e, onClick: () => setTitle(e) }, e))))),
                React.createElement("div", { className: "btn-group" },
                    React.createElement(Button, { className: "menu-btn" }, "Menu"))),
            React.createElement("div", { className: "app fixed-layout-content" },
                React.createElement(Switch, null,
                    React.createElement(Route, { path: "/Search" },
                        React.createElement(DemoPage, { className: "normal", name: "Search", components: [
                                {
                                    title: "Basic Search",
                                    component: [
                                        React.createElement(Search, { dataSource: data.Search.dataSource }),
                                        React.createElement(Search, { size: "large", dataSource: data.Search.dataSource }),
                                        React.createElement(Search, { size: "small", dataSource: data.Search.dataSource })
                                    ]
                                },
                                {
                                    title: "Search Line",
                                    component: (React.createElement(Search, { type: "line", dataSource: data.Search.dataSource }))
                                },
                                {
                                    title: "Search History",
                                    component: (React.createElement(Search, { type: "line", history: "hisgeomap-example", dataSource: data.Search.dataSource }))
                                }
                            ] })),
                    React.createElement(Route, { path: "/SidePanel" },
                        React.createElement(DemoPage, { className: "large absolute", name: "SidePanel", components: [
                                {
                                    title: "Basic SidePanel",
                                    component: (React.createElement(SidePanel, { offset: "-80%" },
                                        React.createElement("div", { className: "side-panel-demo" },
                                            React.createElement(Button, null, "Side Panel"),
                                            React.createElement(Slider, null),
                                            React.createElement(Search, { type: "line", placeholder: "Search", dataSource: data.Search
                                                    .dataSource }))))
                                },
                                {
                                    title: "SidePanel Trigger",
                                    component: (React.createElement(SidePanel, { offset: "-80%", trigger: ".side-panel-trigger" },
                                        React.createElement("div", { className: "side-panel-demo" },
                                            React.createElement(Button, { disabled: true }, "Side Panel"),
                                            React.createElement(Button, { className: "side-panel-trigger" }, "Trigger"))))
                                }
                            ] })))))));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
