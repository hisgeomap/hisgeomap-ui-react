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
var classnames_1 = __importDefault(require("classnames"));
require("./Crown.css");
var Crown = /** @class */ (function (_super) {
    __extends(Crown, _super);
    function Crown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = React.createRef();
        _this.isAnimated = false;
        _this.speed = _this.props.speed === undefined ? 10 : _this.props.speed;
        _this.animate = function (speed, dest, positive, setValue, getValue, last) {
            _this.isAnimated = true;
            var component = _this.ref.current;
            if (component) {
                _this.animation = requestAnimationFrame(function () {
                    var cur = getValue();
                    if (last === cur) {
                        return;
                    }
                    var velocity = positive ? speed : -speed;
                    if ((positive && cur < dest) || (!positive && cur > dest)) {
                        var value = cur + velocity;
                        setValue(value);
                        _this.animate(speed, dest, positive, setValue, getValue, cur);
                    }
                    else {
                        setValue(dest);
                        _this.isAnimated = false;
                    }
                });
            }
        };
        _this.center = function (clientX) {
            var component = _this.ref.current;
            if (component) {
                var box = component.getBoundingClientRect();
                var nodes = component.childNodes[0].childNodes;
                var pos = clientX === undefined ? box.left + box.width / 2 : clientX;
                var nodeBox = void 0;
                for (var i = 0; i < nodes.length; i++) {
                    nodeBox = nodes[i].getBoundingClientRect();
                    if (nodeBox.left >= pos) {
                        break;
                    }
                }
                var offsetLeft = nodeBox.left -
                    box.left +
                    component.scrollLeft -
                    box.width / 2 -
                    nodeBox.width / 2;
                _this.animate(clientX === undefined ? _this.speed / 5 : _this.speed, offsetLeft, offsetLeft > component.scrollLeft, function (value) { return (component.scrollLeft = value); }, function () { return component.scrollLeft; });
            }
        };
        _this.onClick = function (e) {
            _this.reset();
            _this.center(e.clientX);
        };
        _this.reset = function () {
            _this.timer !== undefined && clearTimeout(_this.timer);
        };
        _this.onScroll = function (e) {
            _this.reset();
            _this.timer = setTimeout(function () {
                _this.center();
            }, 200);
        };
        return _this;
    }
    Crown.prototype.render = function () {
        return (React.createElement("div", { className: classnames_1.default("Crown", this.props.className), style: { width: this.props.width }, ref: this.ref, onWheel: this.onScroll },
            React.createElement("div", { className: "Crown-wrap", onClick: this.onClick }, this.props.components.map(function (e, i) {
                return (React.createElement("div", { className: "Crown-element", key: i }, e));
            }))));
    };
    return Crown;
}(React.Component));
exports.default = Crown;
