"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = __importDefault(require("../.."));
function NumberEditableText() {
    return (react_1.default.createElement("h1", null,
        "Please ",
        react_1.default.createElement(__1.default, { type: "Number", placeholder: 1 }),
        ". Thank you."));
}
exports.default = NumberEditableText;
