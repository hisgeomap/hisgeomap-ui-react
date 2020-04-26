"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = __importDefault(require("../.."));
var antd_1 = require("antd");
function DefaultExpandSidePanel() {
    return (react_1.default.createElement(__1.default, { offset: "-80%", defaultExpand: true },
        react_1.default.createElement("div", { className: "side-panel-demo" },
            react_1.default.createElement(antd_1.Button, { disabled: true }, "Side Panel"))));
}
exports.default = DefaultExpandSidePanel;
