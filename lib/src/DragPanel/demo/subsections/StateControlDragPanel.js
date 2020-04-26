"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = __importDefault(require("../.."));
function StateControlDragPanel() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.default, { direction: "vertical", states: [["0", "0"], ["0", "40%"], ["20%", "70%"]], defaultState: 2 }),
        react_1.default.createElement(__1.default, { className: "DragPanel-demo-backgound", direction: "vertical", states: [["0", "0"], ["0", "40%"], ["20%", "70%"]], defaultState: 2 })));
}
exports.default = StateControlDragPanel;
