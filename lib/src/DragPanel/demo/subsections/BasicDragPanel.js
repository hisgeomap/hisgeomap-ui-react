"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = __importDefault(require("../.."));
var antd_1 = require("antd");
function BasicDragPanel() {
    return (react_1.default.createElement(__1.default, { direction: "vertical" },
        react_1.default.createElement(antd_1.Button, null, "Drag Panel"),
        react_1.default.createElement(antd_1.Slider, { onChange: function () { } })));
}
exports.default = BasicDragPanel;
