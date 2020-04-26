"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../../..");
var antd_1 = require("antd");
var data = [
    "AutoComplete 1",
    "AutoComplete 2",
    "AutoComplete 3",
    "AutoComplete 4",
    "AutoComplete 5",
    "AutoComplete 6",
    "AutoComplete 7",
    "AutoComplete 8",
    "AutoComplete 9",
    "AutoComplete 10"
];
function FocusSearch() {
    var ref = react_1.useRef(null);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(__1.Search, { type: "line", defaultValue: "dasf", value: "dasf", ref: ref, dataSource: data }),
        react_1.default.createElement(antd_1.Button, { onClick: function () { return ref.current && ref.current.focus(); } }, "Focus")));
}
exports.default = FocusSearch;
