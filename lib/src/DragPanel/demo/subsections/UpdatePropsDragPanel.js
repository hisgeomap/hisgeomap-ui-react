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
var __1 = __importDefault(require("../.."));
var antd_1 = require("antd");
var mode1 = {
    states: [["0%", "0"], ["50%", "0%"]],
    state: 0,
    defaultState: 0,
    direction: "horizontal"
};
var mode2 = {
    state: 2,
    states: [["0", "0"], ["0", "40%"], ["0%", "90%"]],
    direction: "vertical",
    defaultState: 1
};
function UpdatePropsDragPanel() {
    var _a = react_1.useState(mode1), mode = _a[0], setMode = _a[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(__1.default, __assign({ className: "DragPanel-demo-backgound" }, mode),
            react_1.default.createElement(antd_1.Button, { onClick: function () {
                    setMode(mode === mode1 ? mode2 : mode1);
                } }, "Switch Mode"))));
}
exports.default = UpdatePropsDragPanel;
