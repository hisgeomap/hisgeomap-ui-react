"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DemoPage_1 = __importDefault(require("../../DemoPage"));
var BasicEditableText_1 = __importDefault(require("./subsections/BasicEditableText"));
var NumberEditableText_1 = __importDefault(require("./subsections/NumberEditableText"));
var subsections_json_1 = __importDefault(require("./subsections/subsections.json"));
var components = [
    {
        title: "Basic EditableText",
        component: BasicEditableText_1.default,
        code: subsections_json_1.default.BasicEditableText
    },
    {
        title: "Number EditableText",
        component: NumberEditableText_1.default,
        code: subsections_json_1.default.NumberEditableText
    }
];
function EditableTextDemo() {
    return (react_1.default.createElement(DemoPage_1.default, { className: "normal", name: "EditableText", components: components }));
}
exports.default = EditableTextDemo;
