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
require("./SidePanel.css");
var classnames_1 = __importDefault(require("classnames"));
var SidePanel = /** @class */ (function (_super) {
    __extends(SidePanel, _super);
    function SidePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = React.createRef();
        _this.DragCore = new DragCore(_this.ref, _this.props.offset, _this.props.defaultExpand, _this.props.forbidList);
        _this.componentDidMount = function () {
            _this.bindTrigger();
        };
        _this.bindTrigger = function () {
            if (_this.props.trigger) {
                var trigger = document.querySelector(_this.props.trigger);
                if (trigger) {
                    trigger.addEventListener("click", _this.DragCore.trigger);
                }
            }
        };
        return _this;
    }
    SidePanel.prototype.render = function () {
        return (React.createElement("div", { className: classnames_1.default("SidePanel", this.props.className), style: {
                transform: "translateX(" + this.DragCore.offset + ") translate(0,0)"
            }, ref: this.ref, draggable: true, onDragStart: this.DragCore.onDragStart, onDragEnd: this.DragCore.onDragStop, onDragOver: this.DragCore.onDrag, onTouchStart: this.DragCore.onTouchStart, onTouchMove: this.DragCore.onTouchMove, onTouchEnd: this.DragCore.onTouchStop }, this.props.children));
    };
    return SidePanel;
}(React.Component));
var DragCore = /** @class */ (function () {
    function DragCore(ref, offset, expand, forbidList) {
        var _this = this;
        if (expand === void 0) { expand = false; }
        if (forbidList === void 0) { forbidList = []; }
        this.image = new Image();
        this.transition = "0.3s transform ease-in-out";
        this.direction = false;
        // dragging
        this.pos = [];
        // adaptation for scroll functionality
        this.first = true;
        this.isVertical = false;
        this.scrollTop = 0;
        // adaptation for inside drag component
        this.dragging = false;
        this.forbidList = [];
        this.addPos = function (pos) {
            _this.pos.unshift(pos);
            if (_this.pos.length > DragCore.SIZE) {
                _this.pos.pop();
            }
        };
        this.onTouchStart = function (event) {
            event.screenX = event.changedTouches[0].screenX;
            event.screenY = event.changedTouches[0].screenY;
            _this.onDragStart(event);
        };
        this.onTouchMove = function (event) {
            event.screenX = event.changedTouches[0].screenX;
            event.screenY = event.changedTouches[0].screenY;
            _this.onDrag(event);
        };
        this.onTouchStop = function (event) {
            _this.onDragStop(event);
        };
        this.onDragStart = function (event) {
            event && event.stopPropagation();
            var component = _this.component.current;
            var pos = [event.screenX, event.screenY];
            _this.pos = [];
            _this.startPos = pos;
            _this.addPos(pos);
            _this.first = true;
            _this.dragging = true;
            if (event.dataTransfer) {
                // Fix: Firefox draggable issue
                event.dataTransfer.setData("Text", "");
                event.dataTransfer.setDragImage(_this.image, 0, 0);
            }
            if (component) {
                _this.scrollTop = component.scrollTop;
                component.style.transition = "none";
            }
        };
        this.onDrag = function (event) {
            event && event.stopPropagation();
            var pos = [event.screenX, event.screenY];
            var component = _this.component.current;
            if (_this.dragging && pos[0] !== 0 && component && _this.startPos) {
                if (_this.first) {
                    _this.isVertical =
                        Math.abs(_this.pos[0][1] - pos[1]) -
                            Math.abs(_this.pos[0][0] - pos[0]) >
                            0;
                    _this.first = false;
                }
                if (!_this.isVertical) {
                    var diff = pos[0] - _this.startPos[0];
                    var direction = pos[0] - _this.pos[0][0];
                    _this.direction =
                        direction === 0 ? _this.direction : direction > 0;
                    _this.addPos(pos);
                    component.scrollTop = _this.scrollTop;
                    component.style.transform = "translateX(" + _this.offset + ") translate(" + diff + "px,0)";
                }
            }
        };
        this.onDragStop = function (event) {
            event && event.stopPropagation();
            var component = _this.component.current;
            if (component && _this.dragging) {
                if (!_this.direction) {
                    _this.offset = _this.defaultOffset;
                }
                else {
                    _this.offset = "0";
                }
                if (!_this.isVertical) {
                    component.scrollTop = _this.scrollTop;
                    component.style.transition = _this.transition;
                    component.style.transform = "translateX(" + _this.offset + ") translate(0,0)";
                }
                _this.dragging = false;
            }
        };
        this.trigger = function () {
            _this.direction = !_this.direction;
            _this.dragging = true;
            var component = _this.component.current;
            _this.scrollTop = component ? component.scrollTop : null;
            _this.onDragStop(null);
        };
        this.component = ref;
        this.defaultOffset = offset.trim();
        this.offset = expand ? "0" : this.defaultOffset;
        this.image.src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
        this.forbidList = forbidList;
    }
    DragCore.SIZE = 3;
    return DragCore;
}());
exports.default = SidePanel;
