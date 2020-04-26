"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DemoPage_1 = __importDefault(require("../../DemoPage"));
function CrownDemo() {
    return (react_1.default.createElement(DemoPage_1.default, { name: "Crown", components: [
        // {
        //     title: "Basic Crown",
        //     component: (
        //         <Crown
        //             components={counter(20).map(e => (
        //                 <div className="crown-box">{e}</div>
        //             ))}
        //         ></Crown>
        //     )
        // },
        // {
        //     title: "Crown with ToolTip",
        //     component: (
        //         <Crown
        //             components={counter(20).map(e => (
        //                 <div className="crown-box" ref={crownRef}>
        //                     <Tooltip title="Tooltip">
        //                         <div className="crown-box-content">
        //                             {e}
        //                         </div>
        //                     </Tooltip>
        //                 </div>
        //             ))}
        //         ></Crown>
        //     )
        // }
        ] }));
}
exports.default = CrownDemo;
