"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DemoPage_1 = __importDefault(require("../../DemoPage"));
var BasicSearch_1 = __importDefault(require("./subsections/BasicSearch"));
var subsections_json_1 = __importDefault(require("./subsections/subsections.json"));
var LineSearch_1 = __importDefault(require("./subsections/LineSearch"));
var HistorySearch_1 = __importDefault(require("./subsections/HistorySearch"));
var DefaultSearch_1 = __importDefault(require("./subsections/DefaultSearch"));
var FocusSearch_1 = __importDefault(require("./subsections/FocusSearch"));
var components = [
    {
        title: "Basic Search",
        component: BasicSearch_1.default,
        code: subsections_json_1.default.BasicSearch
    },
    {
        title: "Search Line",
        component: LineSearch_1.default,
        code: subsections_json_1.default.LineSearch
    },
    {
        title: "Search History",
        component: HistorySearch_1.default,
        code: subsections_json_1.default.HistorySearch
    },
    {
        title: "Default Value and Value",
        component: DefaultSearch_1.default,
        code: subsections_json_1.default.DefaultSearch
    },
    {
        title: "Focus",
        component: FocusSearch_1.default,
        code: subsections_json_1.default.FocusSearch
    }
];
function SearchDemo() {
    return (react_1.default.createElement(DemoPage_1.default, { className: "normal", name: "Search", components: components }));
}
exports.default = SearchDemo;
