import * as React from "react";
import "./DragPanel.css";
import classNames from "classnames";
class DragPanel extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
        this.DragCore = new DragCore(this.ref, this.props.direction, this.props.states, this.props.defaultState, this.props.onStateChange);
        this.handle = null;
        this.trigger = null;
        this.componentDidUpdate = (prevProps) => {
            if (this.needsUpdate(prevProps, this.props, DragPanel.attrsNeedsUpdate)) {
                console.log("rebuild", prevProps, this.props);
                // Change big enough to trigger a rebuild
                this.unbindEvent();
                this.DragCore = new DragCore(this.ref, this.props.direction, this.props.states, this.props.defaultState, this.props.onStateChange);
                this.bindEvent();
                this.DragCore.setState(this.props.state);
            }
            else if (this.needsUpdate(prevProps, this.props, ["state"])) {
                console.log("update");
                // Only state change
                this.DragCore.setState(this.props.state);
            }
        };
        this.needsUpdate = (prevProps, props, list) => {
            console.log(list.map((attr) => prevProps[attr] === props[attr]));
            return (list
                .map((attr) => prevProps[attr] === props[attr])
                .filter(e => e === false).length > 0);
        };
        this.unbindEvent = () => {
            if (this.handle) {
                this.handle.removeEventListener("dragstart", this.DragCore.onDragStart);
                this.handle.removeEventListener("drag", this.DragCore.onDrag);
                this.handle.removeEventListener("dragend", this.DragCore.onDragStop);
                this.handle.removeEventListener("dragover", this.DragCore.onDragOver);
                this.handle.removeEventListener("touchstart", this.DragCore.onTouchStart);
                this.handle.removeEventListener("touchmove", this.DragCore.onTouchMove);
                this.handle.removeEventListener("touchend", this.DragCore.onTouchStop);
            }
            if (this.trigger) {
                for (let i = 0; i < this.trigger.length; i++) {
                    this.trigger[i].removeEventListener("click", this.triggerFunc);
                }
            }
        };
        this.bindEvent = () => {
            this.handle = this.props.handle
                ? document.querySelector(this.props.handle)
                : this.ref.current;
            this.trigger = this.props.trigger
                ? document.querySelectorAll(this.props.trigger)
                : null;
            if (this.handle) {
                // Fix: Chrome Passive Event Requirement
                const passiveOption = { passive: true };
                this.handle.addEventListener("dragstart", this.DragCore.onDragStart, passiveOption);
                this.handle.addEventListener("drag", this.DragCore.onDrag, passiveOption);
                this.handle.addEventListener("dragend", this.DragCore.onDragStop, passiveOption);
                this.handle.addEventListener("dragover", this.DragCore.onDragOver);
                this.handle.addEventListener("touchstart", this.DragCore.onTouchStart, passiveOption);
                this.handle.addEventListener("touchmove", this.DragCore.onTouchMove, passiveOption);
                this.handle.addEventListener("touchend", this.DragCore.onTouchStop, passiveOption);
                this.handle.setAttribute("draggable", "true");
            }
            if (this.trigger) {
                for (let i = 0; i < this.trigger.length; i++) {
                    this.trigger[i].addEventListener("click", this.triggerFunc);
                }
            }
        };
        this.triggerFunc = (e) => {
            if (this.props.onTrigger) {
                const stateIndex = this.props.onTrigger(this.DragCore.curPos.state, e);
                const lastIndex = this.DragCore.curPos.state;
                this.DragCore.curPos = {
                    state: stateIndex !== undefined
                        ? stateIndex
                        : this.DragCore.curPos.state,
                    displacement: [0, 0],
                    pos: [0, 0]
                };
                lastIndex !== -1 &&
                    lastIndex !== this.DragCore.curPos.state &&
                    this.props.onStateChange &&
                    this.props.onStateChange(lastIndex, this.DragCore.curPos.state);
                this.DragCore.transform();
            }
        };
        this.componentDidMount = () => {
            this.bindEvent();
        };
    }
    render() {
        return (React.createElement("div", { className: classNames("DragPanel", this.props.className), style: {
                transform: this.DragCore.getTransform()
            }, ref: this.ref }, this.props.children));
    }
}
DragPanel.attrsNeedsUpdate = [
    "defaultState",
    "states",
    "direction",
    "handle",
    "trigger",
    "onTrigger",
    "onStateChange"
];
class DragCore {
    constructor(ref, direction, states = [], defaultState = -1, onStateChange) {
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
        this.setState = (state) => {
            if (state !== undefined) {
                const lastState = this.curPos.state;
                this.curPos.state = state;
                this.curPos.displacement = [0, 0];
                this.transform(true);
                lastState !== this.curPos.state &&
                    this.onStateChange &&
                    this.onStateChange(lastState, this.curPos.state);
            }
        };
        this.onTouchStart = (event) => {
            event.screenX = event.changedTouches[0].screenX;
            event.screenY = event.changedTouches[0].screenY;
            this.onDragStart(event);
        };
        this.onTouchMove = (event) => {
            event.screenX = event.changedTouches[0].screenX;
            event.screenY = event.changedTouches[0].screenY;
            this.onDrag(event);
        };
        this.onTouchStop = (event) => {
            this.onDragStop(event);
        };
        this.onDragStart = (event) => {
            event && event.stopPropagation();
            const component = this.component.current;
            this.startPos = [event.screenX, event.screenY];
            if (event.dataTransfer) {
                // Fix: Firefox draggable issue
                event.dataTransfer.setData("Text", "");
                event.dataTransfer.setDragImage(this.image, 0, 0);
            }
            if (component) {
                this.first = true;
                this.dragging = true;
                this.scrollTop = component.scrollTop;
                component.style.transition = "none";
            }
        };
        this.onDrag = (event) => {
            event && event.stopPropagation();
            const pos = [event.screenX, event.screenY];
            if (this.dragging && pos[0] !== 0 && pos[1] !== 0) {
                // calculate difference vector
                const diff = [pos[0] - this.startPos[0], pos[1] - this.startPos[1]];
                if (this.first) {
                    // detect whether is main direction
                    this.isMainDir = true;
                    const absDiff = [Math.abs(diff[0]), Math.abs(diff[1])];
                    switch (this.direction) {
                        case "horizontal":
                            this.isMainDir = absDiff[0] >= absDiff[1];
                            break;
                        case "vertical":
                            this.isMainDir = absDiff[0] <= absDiff[1];
                            break;
                    }
                    this.first = false;
                }
                else {
                    if (this.isMainDir) {
                        switch (this.direction) {
                            case "horizontal":
                                diff[1] = 0;
                                break;
                            case "vertical":
                                diff[0] = 0;
                                break;
                        }
                        this.curPos.pos = diff;
                        this.transform();
                    }
                }
            }
        };
        this.onDragStop = (event) => {
            event && event.stopPropagation();
            const component = this.component.current;
            if (component && this.dragging && this.isMainDir) {
                if (this.isMainDir) {
                    component.scrollTop = this.scrollTop;
                    this.curPos.displacement[0] += this.curPos.pos[0];
                    this.curPos.displacement[1] += this.curPos.pos[1];
                    this.curPos.pos = [0, 0];
                    if (this.states.length > 0) {
                        this.setState(this.findNearestState());
                    }
                }
                this.dragging = false;
            }
        };
        this.onDragOver = (event) => {
            // Fix: DragEnd waiting for Ghost Image flying back
            event.preventDefault();
        };
        this.transform = (animation = false) => {
            const component = this.component.current;
            if (component) {
                component.scrollTop = this.scrollTop;
                if (animation) {
                    component.style.transition = this.transition;
                    component.style.transform = this.getTransform();
                }
                else {
                    component.style.transform = this.getTransform();
                }
            }
        };
        this.getTransform = () => {
            return `translateX(${this.curPos.state < 0 ? 0 : this.states[this.curPos.state][0]}) translateY(${this.curPos.state < 0 ? 0 : this.states[this.curPos.state][1]}) translate(${this.curPos.displacement[0] +
                this.curPos.pos[0]}px, ${this.curPos.displacement[1] +
                this.curPos.pos[1]}px)`;
        };
        this.translateCSS = (css) => {
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
        this.calculateState = (stateIndex, length) => {
            const state = this.translatedStates[stateIndex];
            const result = [0, 0];
            result[0] = state[0].percent
                ? length[0] * state[0].value
                : state[0].value;
            result[1] = state[1].percent
                ? length[1] * state[1].value
                : state[1].value;
            return result;
        };
        this.findNearestState = () => {
            const component = this.component.current;
            if (component) {
                const box = component.getBoundingClientRect();
                const length = [box.width, box.height];
                const curPos = this.calculateState(this.curPos.state, length);
                curPos[0] += this.curPos.displacement[0] + this.curPos.pos[0];
                curPos[1] += this.curPos.displacement[1] + this.curPos.pos[1];
                let minI = -1;
                let min = Number.MAX_SAFE_INTEGER;
                for (let i = 0; i < this.states.length; i++) {
                    const pos = this.calculateState(i, length);
                    let diff = min;
                    switch (this.direction) {
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
        this.trigger = () => {
            this.dragging = true;
            const component = this.component.current;
            this.scrollTop = component ? component.scrollTop : null;
            this.onDragStop(null);
        };
        this.component = ref;
        this.direction = direction;
        this.states = states;
        this.translatedStates = states.map(state => {
            return state.map(css => this.translateCSS(css));
        });
        this.onStateChange = onStateChange;
        this.image.src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
        this.setState(defaultState);
    }
}
DragCore.SIZE = 3;
export default DragPanel;
