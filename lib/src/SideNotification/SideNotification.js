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
var antd_1 = require("antd");
var classnames_1 = __importDefault(require("classnames"));
require("./SideNotification.css");
var SideNotification = /** @class */ (function (_super) {
    __extends(SideNotification, _super);
    function SideNotification() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.open = false;
        _this.notify = function () {
            if (_this.props.single) {
                if (!_this.open) {
                    _this.open = true;
                    antd_1.notification.open(__assign(__assign({}, _this.props.message), { onClose: function () {
                            _this.open = false;
                        } }));
                }
            }
            else {
                antd_1.notification.open(_this.props.message);
            }
        };
        return _this;
    }
    SideNotification.prototype.render = function () {
        return (React.createElement(antd_1.Button, { type: "primary", className: classnames_1.default("Notification-btn", this.props.className), ghost: true, shape: "circle", onClick: this.notify }, "?"));
    };
    SideNotification.defaultProps = {
        single: true,
        message: {
            duration: 20,
            message: "常见问题",
            description: (React.createElement("p", null,
                "\u5E74\u4EFD\u6709\u95EE\u9898\uFF1F\u6570\u636E\u4E0D\u6B63\u786E\uFF1F\u6D4F\u89C8\u5668\u4E0D\u517C\u5BB9\uFF1F \u975E\u5E38\u62B1\u6B49\uFF0C\u592A\u53F2\u53E4\u5377\u8FD8\u662F\u4E00\u4E2A\u5F88\u7A1A\u5AE9\u7684\u9879\u76EE\uFF0C\u6211\u4EEC\u975E\u5E38\u9700\u8981\u60A8\u5B9D\u8D35\u7684\u5EFA\u8BAE\u548C\u6307\u6B63\uFF0C\u5E0C\u671B\u60A8\u80FD\u8C05\u89E3\u3002\u82E5\u662F\u60A8\u53D1\u73B0\u4EFB\u4F55\u9519\u8BEF\u548C\u758F\u5FFD\uFF0C\u8BF7\u60A8\u7ACB\u523B\u901A\u77E5\u6211\u4EEC\uFF0C\u6211\u4EEC\u4F1A\u9A6C\u4E0A\u8FDB\u884C\u6539\u6B63\u3002 \u6211\u4EEC\u7684\u8054\u7CFB\u65B9\u5F0F\u662F",
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("a", { className: "slider-bar-contact", href: "mailto:hisgeomap@gmail.com" }, "hisgeomap@gmail.com"),
                React.createElement("br", null),
                React.createElement("br", null),
                "\u975E\u5E38\u611F\u8C22\u60A8\u7684\u8010\u5FC3\u4E0E\u5E2E\u52A9\uFF01")),
            onClick: function () { }
        }
    };
    return SideNotification;
}(React.Component));
exports.default = SideNotification;
