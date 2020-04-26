"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DemoPage_1 = __importDefault(require("../../DemoPage"));
var BasicSideNotification_1 = __importDefault(require("./subsections/BasicSideNotification"));
var subsections_json_1 = __importDefault(require("./subsections/subsections.json"));
var components = [
    {
        title: "Basic SideNotification",
        component: BasicSideNotification_1.default,
        code: subsections_json_1.default.BasicSideNotification
    }
];
function SideNotificationDemo() {
    return react_1.default.createElement(DemoPage_1.default, { name: "SideNotification", components: components });
}
exports.default = SideNotificationDemo;
