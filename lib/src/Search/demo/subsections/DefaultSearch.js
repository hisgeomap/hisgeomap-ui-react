"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../..");
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
function DefaultSearch() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.Search, { type: "line", defaultValue: "dasf", value: "dasf", dataSource: data }),
        react_1.default.createElement(__1.Search, { type: "line", defaultValue: "dasf", dataSource: data })));
}
exports.default = DefaultSearch;
