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
require("./DragPanel.css");
var classnames_1 = __importDefault(require("classnames"));
var DragPanel = /** @class */ (function (_super) {
    __extends(DragPanel, _super);
    function DragPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = React.createRef();
        _this.DragCore = new DragCore(_this.ref, _this.props.direction, _this.props.states, _this.props.defaultState, _this.props.onStateChange);
        _this.handle = null;
        _this.trigger = null;
        _this.componentDidUpdate = function (prevProps) {
            if (_this.needsUpdate(prevProps, _this.props, DragPanel.attrsNeedsUpdate)) {
                console.log("rebuild", prevProps, _this.props);
                // Change big enough to trigger a rebuild
                _this.unbindEvent();
                _this.DragCore = new DragCore(_this.ref, _this.props.direction, _this.props.states, _this.props.defaultState, _this.props.onStateChange);
                _this.bindEvent();
                _this.DragCore.setState(_this.props.state);
            }
            else if (_this.needsUpdate(prevProps, _this.props, ["state"])) {
                console.log("update");
                // Only state change
                _this.DragCore.setState(_this.props.state);
            }
        };
        _this.needsUpdate = function (prevProps, props, list) {
            console.log(list.map(function (attr) { return prevProps[attr] === props[attr]; }));
            return (list
                .map(function (attr) {
                return prevProps[attr] === props[attr];
            })
                .filter(function (e) { return e === false; }).length > 0);
        };
        _this.unbindEvent = function () {
            if (_this.handle) {
                _this.handle.removeEventListener("dragstart", _this.DragCore.onDragStart);
                _this.handle.removeEventListener("drag", _this.DragCore.onDrag);
                _this.handle.removeEventListener("dragend", _this.DragCore.onDragStop);
                _this.handle.removeEventListener("dragover", _this.DragCore.onDragOver);
                _this.handle.removeEventListener("touchstart", _this.DragCore.onTouchStart);
                _this.handle.removeEventListener("touchmove", _this.DragCore.onTouchMove);
                _this.handle.removeEventListener("touchend", _this.DragCore.onTouchStop);
            }
            if (_this.trigger) {
                for (var i = 0; i < _this.trigger.length; i++) {
                    _this.trigger[i].removeEventListener("click", _this.triggerFunc);
                }
            }
        };
        _this.bindEvent = function () {
            _this.handle = _this.props.handle
                ? document.querySelector(_this.props.handle)
                : _this.ref.current;
            _this.trigger = _this.props.trigger
                ? document.querySelectorAll(_this.props.trigger)
                : null;
            if (_this.handle) {
                // Fix: Chrome Passive Event Requirement
                var passiveOption = { passive: true };
                _this.handle.addEventListener("dragstart", _this.DragCore.onDragStart, passiveOption);
                _this.handle.addEventListener("drag", _this.DragCore.onDrag, passiveOption);
                _this.handle.addEventListener("dragend", _this.DragCore.onDragStop, passiveOption);
                _this.handle.addEventListener("dragover", _this.DragCore.onDragOver);
                _this.handle.addEventListener("touchstart", _this.DragCore.onTouchStart, passiveOption);
                _this.handle.addEventListener("touchmove", _this.DragCore.onTouchMove, passiveOption);
                _this.handle.addEventListener("touchend", _this.DragCore.onTouchStop, passiveOption);
                _this.handle.setAttribute("draggable", "true");
            }
            if (_this.trigger) {
                for (var i = 0; i < _this.trigger.length; i++) {
                    _this.trigger[i].addEventListener("click", _this.triggerFunc);
                }
            }
        };
        _this.triggerFunc = function (e) {
            if (_this.props.onTrigger) {
                var stateIndex = _this.props.onTrigger(_this.DragCore.curPos.state, e);
                var lastIndex = _this.DragCore.curPos.state;
                _this.DragCore.curPos = {
                    state: stateIndex !== undefined
                        ? stateIndex
                        : _this.DragCore.curPos.state,
                    displacement: [0, 0],
                    pos: [0, 0]
                };
                lastIndex !== -1 &&
                    lastIndex !== _this.DragCore.curPos.state &&
                    _this.props.onStateChange &&
                    _this.props.onStateChange(lastIndex, _this.DragCore.curPos.state);
                _this.DragCore.transform();
            }
        };
        _this.componentDidMount = function () {
            _this.bindEvent();
        };
        return _this;
    }
    DragPanel.prototype.render = function () {
        return (React.createElement("div", { className: classnames_1.default("DragPanel", this.props.className), style: {
                transform: this.DragCore.getTransform()
            }, ref: this.ref }, this.props.children));
    };
    DragPanel.attrsNeedsUpdate = [
        "defaultState",
        "states",
        "direction",
        "handle",
        "trigger",
        "onTrigger",
        "onStateChange"
    ];
    return DragPanel;
}(React.Component));
var DragCore = /** @class */ (function () {
    function DragCore(ref, direction, states, defaultState, onStateChange) {
        var _this = this;
        if (states === void 0) { states = []; }
        if (defaultState === void 0) { defaultState = -1; }
        this.image = new Image();
        this.curPos = {
            state: -1,
            displacement: [0, 0],
            pos: [0, 0]
        };
        this.transition = "0.3s transform ease-in-out";
        this.translatedStates = [];
        // dragging
        this.pos = [];
        this.startPos = [0, 0];
        // adaptation for scroll functionality
        this.first = true;
        this.isMainDir = true;
        this.isPostiveDir = false;
        this.scrollTop = 0;
        // adaptation for inside drag component
        this.dragging = false;
        this.setState = function (state) {
            if (state !== undefined) {
                var lastState = _this.curPos.state;
                _this.curPos.state = state;
                _this.curPos.displacement = [0, 0];
                _this.transform(true);
                lastState !== _this.curPos.state &&
                    _this.onStateChange &&
                    _this.onStateChange(lastState, _this.curPos.state);
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
            _this.startPos = [event.screenX, event.screenY];
            if (event.dataTransfer) {
                // Fix: Firefox draggable issue
                event.dataTransfer.setData("Text", "");
                event.dataTransfer.setDragImage(_this.image, 0, 0);
            }
            if (component) {
                _this.first = true;
                _this.dragging = true;
                _this.scrollTop = component.scrollTop;
                component.style.transition = "none";
            }
        };
        this.onDrag = function (event) {
            event && event.stopPropagation();
            var pos = [event.screenX, event.screenY];
            if (_this.dragging && pos[0] !== 0 && pos[1] !== 0) {
                // calculate difference vector
                var diff = [pos[0] - _this.startPos[0], pos[1] - _this.startPos[1]];
                if (_this.first) {
                    // detect whether is main direction
                    _this.isMainDir = true;
                    var absDiff = [Math.abs(diff[0]), Math.abs(diff[1])];
                    switch (_this.direction) {
                        case "horizontal":
                            _this.isMainDir = absDiff[0] >= absDiff[1];
                            break;
                        case "vertical":
                            _this.isMainDir = absDiff[0] <= absDiff[1];
                            break;
                    }
                    _this.first = false;
                }
                else {
                    if (_this.isMainDir) {
                        switch (_this.direction) {
                            case "horizontal":
                                diff[1] = 0;
                                break;
                            case "vertical":
                                diff[0] = 0;
                                break;
                        }
                        _this.curPos.pos = diff;
                        _this.transform();
                    }
                }
            }
        };
        this.onDragStop = function (event) {
            event && event.stopPropagation();
            var component = _this.component.current;
            if (component && _this.dragging && _this.isMainDir) {
                if (_this.isMainDir) {
                    component.scrollTop = _this.scrollTop;
                    _this.curPos.displacement[0] += _this.curPos.pos[0];
                    _this.curPos.displacement[1] += _this.curPos.pos[1];
                    _this.curPos.pos = [0, 0];
                    if (_this.states.length > 0) {
                        _this.setState(_this.findNearestState());
                    }
                }
                _this.dragging = false;
            }
        };
        this.onDragOver = function (event) {
            // Fix: DragEnd waiting for Ghost Image flying back
            event.preventDefault();
        };
        this.transform = function (animation) {
            if (animation === void 0) { animation = false; }
            var component = _this.component.current;
            if (component) {
                component.scrollTop = _this.scrollTop;
                if (animation) {
                    component.style.transition = _this.transition;
                    component.style.transform = _this.getTransform();
                }
                else {
                    component.style.transform = _this.getTransform();
                }
            }
        };
        this.getTransform = function () {
            return "translateX(" + (_this.curPos.state < 0 ? 0 : _this.states[_this.curPos.state][0]) + ") translateY(" + (_this.curPos.state < 0 ? 0 : _this.states[_this.curPos.state][1]) + ") translate(" + (_this.curPos.displacement[0] +
                _this.curPos.pos[0]) + "px, " + (_this.curPos.displacement[1] +
                _this.curPos.pos[1]) + "px)";
        };
        this.translateCSS = function (css) {
            css = css.trim();
            if (css.indexOf("%") !== -1) {
                return {
                    percent: true,
                    value: parseFloat(css) / 100
                };
            }
            else {
                return {
                    percent: false,
                    value: parseFloat(css)
                };
            }
        };
        this.calculateState = function (stateIndex, length) {
            var state = _this.translatedStates[stateIndex];
            var result = [0, 0];
            result[0] = state[0].percent
                ? length[0] * state[0].value
                : state[0].value;
            result[1] = state[1].percent
                ? length[1] * state[1].value
                : state[1].value;
            return result;
        };
        this.findNearestState = function () {
            var component = _this.component.current;
            if (component) {
                var box = component.getBoundingClientRect();
                var length_1 = [box.width, box.height];
                var curPos = _this.calculateState(_this.curPos.state, length_1);
                curPos[0] += _this.curPos.displacement[0] + _this.curPos.pos[0];
                curPos[1] += _this.curPos.displacement[1] + _this.curPos.pos[1];
                var minI = -1;
                var min = Number.MAX_SAFE_INTEGER;
                for (var i = 0; i < _this.states.length; i++) {
                    var pos = _this.calculateState(i, length_1);
                    var diff = min;
                    switch (_this.direction) {
                        case "horizontal":
                            diff = Math.pow((curPos[0] - pos[0]), 2);
                            break;
                        case "vertical":
                            diff = Math.pow((curPos[1] - pos[1]), 2);
                            break;
                        default:
                            diff =
                                Math.pow((curPos[0] - pos[0]), 2) +
                                    Math.pow((curPos[1] - pos[1]), 2);
                    }
                    minI = diff < min ? i : minI;
                    min = diff < min ? diff : min;
                }
                return minI;
            }
            return -1;
        };
        this.trigger = function () {
            _this.dragging = true;
            var component = _this.component.current;
            _this.scrollTop = component ? component.scrollTop : null;
            _this.onDragStop(null);
        };
        this.component = ref;
        this.direction = direction;
        this.states = states;
        this.translatedStates = states.map(function (state) {
            return state.map(function (css) { return _this.translateCSS(css); });
        });
        this.onStateChange = onStateChange;
        this.image.src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
        this.setState(defaultState);
    }
    DragCore.SIZE = 3;
    return DragCore;
}());
exports.default = DragPanel;
