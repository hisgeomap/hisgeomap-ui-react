"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = __importDefault(require("../.."));
var antd_1 = require("antd");
function HandleDragPanel() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(__1.default, { direction: "vertical", states: [["0%", "0"], ["0%", "40%"], ["0%", "90%"]], handle: ".DragPanel-demo-handle", defaultState: 2 },
            react_1.default.createElement(antd_1.Button, { className: "DragPanel-demo-handle" }, "Handle")),
        react_1.default.createElement(__1.default, { direction: "vertical", handle: ".DragPanel-demo-handle2", className: "DragPanel-demo-backgound" },
            react_1.default.createElement(antd_1.Button, { className: "DragPanel-demo-handle2" }, "Handle"))));
}
exports.default = HandleDragPanel;
