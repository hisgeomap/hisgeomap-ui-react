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
require("./DemoPage.css");
var antd_1 = require("antd");
var classnames_1 = __importDefault(require("classnames"));
var DemoPage = /** @class */ (function (_super) {
    __extends(DemoPage, _super);
    function DemoPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showComponentBorder: false
        };
        _this.renderCompoent = function (component, key) {
            return (React.createElement("div", { key: key, className: classnames_1.default("DemoPage-container", {
                    "DemoPage-container-bordered": _this.state
                        .showComponentBorder
                }, _this.props.className) }, component));
        };
        return _this;
    }
    DemoPage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: classnames_1.default(this.props.className) },
            React.createElement("h1", null, this.props.name),
            React.createElement("h3", null,
                "Show Component Border :",
                React.createElement(antd_1.Switch, { onChange: function (checked) {
                        return _this.setState({ showComponentBorder: checked });
                    } })),
            React.createElement("div", { className: "DemoPage-content" }, this.props.components.map(function (e, i) {
                return (React.createElement("div", { className: "DemoPage-subsection", key: i },
                    React.createElement("div", { className: "DemoPage-subsection-content" },
                        React.createElement("h2", null, e.title),
                        React.createElement(antd_1.Divider, null),
                        React.createElement("div", { className: "DemoPage-subsection-space" }, e.component instanceof Array
                            ? e.component.map(function (subCompoent, i) {
                                return _this.renderCompoent(subCompoent, e.title + "-" + i);
                            })
                            : _this.renderCompoent(e.component, e.title + "-" + 0)))));
            }))));
    };
    return DemoPage;
}(React.Component));
exports.default = DemoPage;
