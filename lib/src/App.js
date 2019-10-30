"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var _1 = require(".");
var antd_1 = require("antd");
var antd_2 = require("antd");
var DemoPage_1 = __importDefault(require("./DemoPage"));
var package_json_1 = __importDefault(require("../package.json"));
var SideNotification_1 = __importDefault(require("./SideNotification"));
var counter = function (n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
};
var data = {
    Search: {
        dataSource: counter(10).map(function (e) { return "AutoComplete " + e; })
    }
};
var links = ["Home", "Search", "SidePanel", "Crown", "SideNotification"];
var crownRef = react_1.default.createRef();
var App = function () {
    var _a = react_1.useState(window.location.pathname.substr(window.location.pathname.lastIndexOf("/") + 1)), title = _a[0], setTitle = _a[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, { basename: "/" + package_json_1.default.name },
            react_1.default.createElement(_1.SidePanel, { offset: "-250px", className: "navigation", trigger: ".menu-btn" },
                react_1.default.createElement(antd_1.Menu, { className: "menu", selectedKeys: [title.toLowerCase()] }, links.map(function (e) { return (react_1.default.createElement(antd_1.Menu.Item, { key: e.toLowerCase() },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/" + e, onClick: function () { return setTitle(e); } }, e))); })),
                react_1.default.createElement("div", { className: "btn-group" },
                    react_1.default.createElement(antd_2.Button, { className: "menu-btn" }, "Menu"))),
            react_1.default.createElement("div", { className: "app fixed-layout-content" },
                react_1.default.createElement(react_router_dom_1.Switch, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/Search" },
                        react_1.default.createElement(DemoPage_1.default, { className: "normal", name: "Search", components: [
                                {
                                    title: "Basic Search",
                                    component: [
                                        react_1.default.createElement(_1.Search, { dataSource: data.Search.dataSource }),
                                        react_1.default.createElement(_1.Search, { size: "large", dataSource: data.Search.dataSource }),
                                        react_1.default.createElement(_1.Search, { size: "small", dataSource: data.Search.dataSource })
                                    ]
                                },
                                {
                                    title: "Search Line",
                                    component: (react_1.default.createElement(_1.Search, { type: "line", dataSource: data.Search.dataSource }))
                                },
                                {
                                    title: "Search History",
                                    component: (react_1.default.createElement(_1.Search, { type: "line", history: "hisgeomap-example", render: function (value) {
                                            return "(" + value + ")";
                                        }, dataSource: data.Search.dataSource }))
                                }
                            ] })),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/SidePanel" },
                        react_1.default.createElement(DemoPage_1.default, { className: "large absolute", name: "SidePanel", components: [
                                {
                                    title: "Basic SidePanel",
                                    component: (react_1.default.createElement(_1.SidePanel, { offset: "-80%", forbidList: ["ant-slider"] },
                                        react_1.default.createElement("div", { className: "side-panel-demo" },
                                            react_1.default.createElement(antd_2.Button, null, "Side Panel"),
                                            react_1.default.createElement(antd_2.Slider, null),
                                            react_1.default.createElement(_1.Search, { type: "line", placeholder: "Search", dataSource: data.Search
                                                    .dataSource }))))
                                },
                                {
                                    title: "SidePanel Trigger",
                                    component: (react_1.default.createElement(_1.SidePanel, { offset: "-80%", trigger: ".side-panel-trigger" },
                                        react_1.default.createElement("div", { className: "side-panel-demo" },
                                            react_1.default.createElement(antd_2.Button, { disabled: true }, "Side Panel"),
                                            react_1.default.createElement(antd_2.Button, { className: "side-panel-trigger" }, "Trigger"))))
                                },
                                {
                                    title: "SidePanel Default Expand",
                                    component: (react_1.default.createElement(_1.SidePanel, { offset: "-80%", defaultExpand: true },
                                        react_1.default.createElement("div", { className: "side-panel-demo" },
                                            react_1.default.createElement(antd_2.Button, { disabled: true }, "Side Panel"))))
                                }
                            ] })),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/Crown" },
                        react_1.default.createElement(DemoPage_1.default, { name: "Crown", components: [
                                {
                                    title: "Basic Crown",
                                    component: (react_1.default.createElement(_1.Crown, { components: counter(20).map(function (e) { return (react_1.default.createElement("div", { className: "crown-box" }, e)); }) }))
                                },
                                {
                                    title: "Crown with ToolTip",
                                    component: (react_1.default.createElement(_1.Crown, { components: counter(20).map(function (e) { return (react_1.default.createElement("div", { className: "crown-box", ref: crownRef },
                                            react_1.default.createElement(antd_1.Tooltip, { title: "Tooltip" },
                                                react_1.default.createElement("div", { className: "crown-box-content" }, e)))); }) }))
                                }
                            ] })),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/SideNotification" },
                        react_1.default.createElement(DemoPage_1.default, { name: "SideNotification", components: [
                                {
                                    title: "Basic SideNotification",
                                    component: react_1.default.createElement(SideNotification_1.default, null)
                                }
                            ] })))))));
};
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById("root"));
