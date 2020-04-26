"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DemoPage_1 = __importDefault(require("../../DemoPage"));
var BasicDragPanel_1 = __importDefault(require("../../DragPanel/demo/subsections/BasicDragPanel"));
var subsections_json_1 = __importDefault(require("./subsections/subsections.json"));
var TriggerSidePanel_1 = __importDefault(require("./subsections/TriggerSidePanel"));
var DefaultExpandSidePanel_1 = __importDefault(require("./subsections/DefaultExpandSidePanel"));
var components = [
    {
        title: "Basic SidePanel",
        component: BasicDragPanel_1.default,
        code: subsections_json_1.default.BasicSidePanel
    },
    {
        title: "SidePanel Trigger",
        component: TriggerSidePanel_1.default,
        code: subsections_json_1.default.TriggerSidePanel
    },
    {
        title: "SidePanel Default Expand",
        component: DefaultExpandSidePanel_1.default,
        code: subsections_json_1.default.DefaultExpandSidePanel
    }
];
function SidePanelDemo() {
    return (react_1.default.createElement(DemoPage_1.default, { className: "large absolute", name: "SidePanel  (Will be Deprecated)", components: components }));
}
exports.default = SidePanelDemo;
