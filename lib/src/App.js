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
var package_json_1 = __importDefault(require("../package.json"));
var DragPanel_demo_1 = __importDefault(require("./DragPanel/demo/DragPanel.demo"));
var SidePanel_demo_1 = __importDefault(require("./SidePanel/demo/SidePanel.demo"));
var SideNotification_demo_1 = __importDefault(require("./SideNotification/demo/SideNotification.demo"));
var Search_demo_1 = __importDefault(require("./Search/demo/Search.demo"));
var EditableText_demo_1 = __importDefault(require("./EditableText/demo/EditableText.demo"));
var links = [
    "Home",
    "Search",
    "SidePanel",
    // "Crown",
    "SideNotification",
    "DragPanel",
    "EditableText"
];
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
                        react_1.default.createElement(Search_demo_1.default, null)),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/SidePanel" },
                        react_1.default.createElement(SidePanel_demo_1.default, null)),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/SideNotification" },
                        react_1.default.createElement(SideNotification_demo_1.default, null)),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/DragPanel" },
                        react_1.default.createElement(DragPanel_demo_1.default, null)),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/EditableText" },
                        react_1.default.createElement(EditableText_demo_1.default, null)))))));
};
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById("root"));
