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
require("./DemoPage.css");
var antd_1 = require("antd");
var classnames_1 = __importDefault(require("classnames"));
var DemoPage = /** @class */ (function (_super) {
    __extends(DemoPage, _super);
    function DemoPage(props) {
        var _this = _super.call(this, props) || this;
        _this.renderCompoent = function (Component, key) {
            return (React.createElement("div", { key: key, className: classnames_1.default("DemoPage-container", {
                    "DemoPage-container-bordered": _this.state
                        .showComponentBorder
                }, _this.props.className) },
                React.createElement(Component, null)));
        };
        _this.switchCodeModeFunc = function (n) {
            return function () {
                _this.setState(__assign(__assign({}, _this.state), { showCode: _this.props.components.map(function (e, i) {
                        return i === n ? !_this.state.showCode[i] : _this.state.showCode[i];
                    }) }));
            };
        };
        _this.state = {
            showComponentBorder: false,
            showCode: props.components.map(function (e) { return false; })
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
                        React.createElement("div", { className: "DemoPage-subsection-space" }, _this.renderCompoent(e.component, e.title + "-" + 0)),
                        React.createElement(antd_1.Divider, null),
                        React.createElement("div", { className: "DemoPage-subsection-extra" },
                            React.createElement(antd_1.Icon, { type: "code", onClick: _this.switchCodeModeFunc(i) }),
                            _this.state.showCode[i] ? (React.createElement("pre", null,
                                React.createElement("code", null, e.code))) : null))));
            }))));
    };
    return DemoPage;
}(React.Component));
exports.default = DemoPage;
