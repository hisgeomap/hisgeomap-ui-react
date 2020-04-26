"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = __importDefault(require("../.."));
var antd_1 = require("antd");
function TriggerDragPanel() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(__1.default, { direction: "vertical", states: [["0", "0"], ["0", "40%"], ["0%", "90%"]], trigger: ".DragPanel-demo-trigger", onTrigger: function () { return 1; }, defaultState: 2 },
            react_1.default.createElement(antd_1.Button, { className: "DragPanel-demo-trigger" }, "Trigger")),
        react_1.default.createElement(__1.default, { direction: "horizontal", className: "DragPanel-demo-backgound", states: [["0%", "0"], ["20%", "0%"], ["40%", "0%"]], trigger: ".DragPanel-demo-trigger2", onTrigger: function () { return 1; }, defaultState: 0 },
            react_1.default.createElement(antd_1.Button, { className: "DragPanel-demo-trigger2" }, "Trigger"))));
}
exports.default = TriggerDragPanel;
