"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var links = [
    "Home",
    "Search",
    "SidePanel",
    "Crown",
    "SideNotification",
    "DragPanel",
    "EditableText"
];
var crownRef = react_1.default.createRef();
var App = function () {
    var _a = react_1.useState(window.location.pathname.substr(window.location.pathname.lastIndexOf("/") + 1)), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(2), state = _b[0], setState = _b[1];
    var ref = react_1.useRef(null);
    var _c = react_1.useState({
        states: [["0%", "0"], ["50%", "0%"]],
        state: 0,
        defaultState: 0,
        direction: "horizontal"
    }), dragPanelMode = _c[0], setDragPanelMode = _c[1];
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
                                },
                                {
                                    title: "Default Value and Value",
                                    component: [
                                        react_1.default.createElement(_1.Search, { type: "line", defaultValue: "dasf", value: "dasf", dataSource: data.Search.dataSource }),
                                        react_1.default.createElement(_1.Search, { type: "line", defaultValue: "dasf", dataSource: data.Search.dataSource })
                                    ]
                                },
                                {
                                    title: "Focus",
                                    component: [
                                        react_1.default.createElement("div", null,
                                            react_1.default.createElement(_1.Search, { type: "line", defaultValue: "dasf", value: "dasf", ref: ref, dataSource: data.Search.dataSource }),
                                            react_1.default.createElement(antd_2.Button, { onClick: function () {
                                                    return ref.current &&
                                                        ref.current.focus();
                                                } }, "Focus"))
                                    ]
                                }
                            ] })),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/SidePanel" },
                        react_1.default.createElement(DemoPage_1.default, { className: "large absolute", name: "SidePanel  (Will be Deprecated)", components: [
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
                                    component: react_1.default.createElement(_1.SideNotification, null)
                                }
                            ] })),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/DragPanel" },
                        react_1.default.createElement(DemoPage_1.default, { className: "large absolute", name: "DragPanel", components: [
                                {
                                    title: "Basic DragPanel",
                                    component: [
                                        react_1.default.createElement(_1.DragPanel, { direction: "vertical" },
                                            react_1.default.createElement(antd_2.Button, null, "Drag Panel"),
                                            react_1.default.createElement(antd_2.Slider, { onChange: function () { } }))
                                    ]
                                },
                                {
                                    title: "DragPanel - State Control",
                                    component: [
                                        react_1.default.createElement("div", null,
                                            react_1.default.createElement(_1.DragPanel, { direction: "vertical", states: [
                                                    ["0", "0"],
                                                    ["0", "40%"],
                                                    ["20%", "70%"]
                                                ], defaultState: 2 }),
                                            react_1.default.createElement(_1.DragPanel, { className: "DragPanel-demo-backgound", direction: "vertical", states: [
                                                    ["0", "0"],
                                                    ["0", "40%"],
                                                    ["20%", "70%"]
                                                ], defaultState: 2 }))
                                    ]
                                },
                                {
                                    title: "DragPanel - Horizontal",
                                    component: [
                                        react_1.default.createElement(_1.DragPanel, { direction: "horizontal", states: [
                                                ["0", "0"],
                                                ["50%", "0%"],
                                                ["90%", "0%"]
                                            ], defaultState: 1 })
                                    ]
                                },
                                {
                                    title: "DragPanel - Handle",
                                    component: [
                                        react_1.default.createElement("div", null,
                                            react_1.default.createElement(_1.DragPanel, { direction: "vertical", states: [
                                                    ["0%", "0"],
                                                    ["0%", "40%"],
                                                    ["0%", "90%"]
                                                ], handle: ".DragPanel-demo-handle", defaultState: 2 },
                                                react_1.default.createElement(antd_2.Button, { className: "DragPanel-demo-handle" }, "Handle")),
                                            react_1.default.createElement(_1.DragPanel, { direction: "vertical", handle: ".DragPanel-demo-handle2", className: "DragPanel-demo-backgound" },
                                                react_1.default.createElement(antd_2.Button, { className: "DragPanel-demo-handle2" }, "Handle")))
                                    ]
                                },
                                {
                                    title: "DragPanel - Trigger",
                                    component: [
                                        react_1.default.createElement("div", null,
                                            react_1.default.createElement(_1.DragPanel, { direction: "vertical", states: [
                                                    ["0", "0"],
                                                    ["0", "40%"],
                                                    ["0%", "90%"]
                                                ], trigger: ".DragPanel-demo-trigger", onTrigger: function () { return 1; }, defaultState: 2 },
                                                react_1.default.createElement(antd_2.Button, { className: "DragPanel-demo-trigger" }, "Trigger")),
                                            react_1.default.createElement(_1.DragPanel, { direction: "horizontal", className: "DragPanel-demo-backgound", states: [
                                                    ["0%", "0"],
                                                    ["20%", "0%"],
                                                    ["40%", "0%"]
                                                ], trigger: ".DragPanel-demo-trigger2", onTrigger: function () { return 1; }, defaultState: 0 },
                                                react_1.default.createElement(antd_2.Button, { className: "DragPanel-demo-trigger2" }, "Trigger")))
                                    ]
                                },
                                {
                                    title: "DragPanel - State Change",
                                    component: [
                                        react_1.default.createElement("div", null,
                                            react_1.default.createElement(_1.DragPanel, { direction: "horizontal", className: "DragPanel-demo-backgound", states: [
                                                    ["0%", "0"],
                                                    ["20%", "0%"],
                                                    ["40%", "0%"]
                                                ], trigger: ".DragPanel-demo-trigger3", onTrigger: function () { return 1; }, state: state, onStateChange: function (prev, cur) { return setState(cur); }, defaultState: 0 },
                                                react_1.default.createElement(antd_2.Button, { className: "DragPanel-demo-trigger3" }, "Trigger")),
                                            react_1.default.createElement(_1.DragPanel, { direction: "vertical", states: [
                                                    ["0", "0"],
                                                    ["0", "40%"],
                                                    ["0%", "90%"]
                                                ], state: state, onStateChange: function (prev, cur) {
                                                    setState(cur);
                                                }, defaultState: 2 },
                                                react_1.default.createElement(antd_2.Button, { onClick: function () {
                                                        return setState(1);
                                                    } }, "Change to State 1")))
                                    ]
                                },
                                {
                                    title: "DragPanel - Update on Props",
                                    component: [
                                        react_1.default.createElement("div", null,
                                            react_1.default.createElement(_1.DragPanel, __assign({ className: "DragPanel-demo-backgound" }, dragPanelMode),
                                                react_1.default.createElement(antd_2.Button, { onClick: function () {
                                                        setDragPanelMode({
                                                            state: 0,
                                                            states: [
                                                                ["0", "0"],
                                                                [
                                                                    "0",
                                                                    "40%"
                                                                ],
                                                                [
                                                                    "0%",
                                                                    "90%"
                                                                ]
                                                            ],
                                                            direction: "vertical",
                                                            defaultState: 1
                                                        });
                                                    } }, "Switch Mode")))
                                    ]
                                }
                            ] })),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/EditableText" },
                        react_1.default.createElement(DemoPage_1.default, { className: "normal", name: "EditableText", components: [
                                {
                                    title: "Basic EditableText",
                                    component: [
                                        react_1.default.createElement("h1", null,
                                            "Please",
                                            " ",
                                            react_1.default.createElement(_1.EditableText, { placeholder: "Edit Here" }),
                                            ". Thank you.")
                                    ]
                                },
                                {
                                    title: "Number EditableText",
                                    component: [
                                        react_1.default.createElement("h1", null,
                                            "Please",
                                            " ",
                                            react_1.default.createElement(_1.EditableText, { type: "Number", placeholder: 1 }),
                                            ". Thank you.")
                                    ]
                                }
                            ] })))))));
};
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById("root"));
