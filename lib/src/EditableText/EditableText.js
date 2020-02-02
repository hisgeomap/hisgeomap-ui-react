"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("./EditableText.css");
var antd_1 = require("antd");
var EditableText = /** @class */ (function (_super) {
    __extends(EditableText, _super);
    function EditableText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            editing: false,
            value: _this.props.placeholder
        };
        _this.ref = React.createRef();
        _this.renderEditable = function () {
            var onBlur = function () {
                if (typeof _this.state.value === "string" &&
                    _this.state.value.trim() === "") {
                    return;
                }
                _this.setState(__assign(__assign({}, _this.state), { editing: false }));
            };
            var onChange = function (e) {
                if (_this.props.type === "Number") {
                    if (!isNaN(e)) {
                        _this.setState(__assign(__assign({}, _this.state), { value: e }));
                    }
                }
                else {
                    _this.setState(__assign(__assign({}, _this.state), { value: e.target.value }));
                }
            };
            var attrs = {
                onBlur: onBlur,
                onPressEnter: onBlur,
                onChange: onChange,
                ref: _this.ref
            };
            switch (_this.props.type) {
                case "Number":
                    return (React.createElement(antd_1.InputNumber, __assign({ value: Number(_this.state.value) }, attrs)));
                default:
                    return React.createElement(antd_1.Input, __assign({ value: _this.state.value }, attrs));
            }
        };
        return _this;
    }
    EditableText.prototype.render = function () {
        var _this = this;
        return (React.createElement("span", { className: classnames_1.default("EditableText", this.props.className), onClick: function () {
                _this.setState(__assign(__assign({}, _this.state), { editing: true }));
                _this.ref.current && _this.ref.current.focus();
            } },
            React.createElement("span", { className: classnames_1.default("EditableText-text", {
                    fadeIn: !this.state.editing,
                    fadeOut: this.state.editing
                }) }, this.state.value),
            React.createElement("div", { className: classnames_1.default("EditableText-editable", {
                    fadeIn: this.state.editing,
                    fadeOut: !this.state.editing
                }) }, this.renderEditable())));
    };
    return EditableText;
}(React.Component));
exports.default = EditableText;
