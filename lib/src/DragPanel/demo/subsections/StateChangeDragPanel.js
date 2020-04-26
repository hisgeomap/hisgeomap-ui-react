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
var __1 = __importDefault(require("../.."));
var antd_1 = require("antd");
function StateChangeDragPanel() {
    var _a = react_1.useState(2), state = _a[0], setState = _a[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(__1.default, { direction: "horizontal", className: "DragPanel-demo-backgound", states: [["0%", "0"], ["20%", "0%"], ["40%", "0%"]], trigger: ".DragPanel-demo-trigger3", onTrigger: function () { return 1; }, state: state, onStateChange: function (prev, cur) { return setState(cur); }, defaultState: 0 },
            react_1.default.createElement(antd_1.Button, { className: "DragPanel-demo-trigger3" }, "Trigger")),
        react_1.default.createElement(__1.default, { direction: "vertical", states: [["0", "0"], ["0", "40%"], ["0%", "90%"]], state: state, onStateChange: function (prev, cur) {
                setState(cur);
            }, defaultState: 2 },
            react_1.default.createElement(antd_1.Button, { onClick: function () { return setState(1); } }, "Change to State 1"))));
}
exports.default = StateChangeDragPanel;
