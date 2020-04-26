"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = __importDefault(require("../.."));
function HorizontalDragPanel() {
    return (react_1.default.createElement(__1.default, { direction: "horizontal", states: [["0", "0"], ["50%", "0%"], ["90%", "0%"]], defaultState: 1 }));
}
exports.default = HorizontalDragPanel;
