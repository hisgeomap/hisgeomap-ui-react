"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DemoPage_1 = __importDefault(require("../../DemoPage"));
var subsections_json_1 = __importDefault(require("./subsections/subsections.json"));
var BasicDragPanel_1 = __importDefault(require("./subsections/BasicDragPanel"));
var StateControlDragPanel_1 = __importDefault(require("./subsections/StateControlDragPanel"));
var HorizontalDragPanel_1 = __importDefault(require("./subsections/HorizontalDragPanel"));
var HandleDragPanel_1 = __importDefault(require("./subsections/HandleDragPanel"));
var TriggerDragPanel_1 = __importDefault(require("./subsections/TriggerDragPanel"));
var StateChangeDragPanel_1 = __importDefault(require("./subsections/StateChangeDragPanel"));
var UpdatePropsDragPanel_1 = __importDefault(require("./subsections/UpdatePropsDragPanel"));
var components = [
    {
        title: "Basic Usage",
        component: BasicDragPanel_1.default,
        code: subsections_json_1.default.BasicDragPanel
    },
    {
        title: "State Control",
        component: StateControlDragPanel_1.default,
        code: subsections_json_1.default.StateControlDragPanel
    },
    {
        title: "DragPanel - Horizontal",
        component: HorizontalDragPanel_1.default,
        code: subsections_json_1.default.HorizontalDragPanel
    },
    {
        title: "DragPanel - Handle",
        component: HandleDragPanel_1.default,
        code: subsections_json_1.default.HandleDragPanel
    },
    {
        title: "DragPanel - Trigger",
        component: TriggerDragPanel_1.default,
        code: subsections_json_1.default.TriggerDragPanel
    },
    {
        title: "DragPanel - State Change",
        component: StateChangeDragPanel_1.default,
        code: subsections_json_1.default.StateChangeDragPanel
    },
    {
        title: "DragPanel - Update on Props",
        component: UpdatePropsDragPanel_1.default,
        code: subsections_json_1.default.UpdatePropsDragPanel
    }
];
function DragPanelDemo() {
    return (react_1.default.createElement(DemoPage_1.default, { className: "large absolute", name: "DragPanel", components: components }));
}
exports.default = DragPanelDemo;
