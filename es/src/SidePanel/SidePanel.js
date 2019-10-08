import * as React from "react";
import "./SidePanel.css";
import classNames from "classnames";
class SidePanel extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
        this.DragCore = new DragCore(this.ref, this.props.offset, this.props.forbidList);
        this.componentDidMount = () => {
            this.bindTrigger();
        };
        this.bindTrigger = () => {
            if (this.props.trigger) {
                const trigger = document.querySelector(this.props.trigger);
                if (trigger) {
                    trigger.addEventListener("click", this.DragCore.trigger);
                }
            }
        };
    }
    render() {
        return (React.createElement("div", { className: classNames("SidePanel", this.props.className), style: {
                transform: `translateX(${this.props.offset}) translate(0,0)`
            }, ref: this.ref, draggable: true, onDragStart: this.DragCore.onDragStart, onDragEnd: this.DragCore.onDragStop, onDragOver: this.DragCore.onDrag, onTouchStart: this.DragCore.onTouchStart, onTouchMove: this.DragCore.onTouchMove, onTouchEnd: this.DragCore.onTouchStop }, this.props.children));
    }
}
class DragCore {
    constructor(ref, offset, forbidList = []) {
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
        this.addPos = (pos) => {
            this.pos.unshift(pos);
            if (this.pos.length > DragCore.SIZE) {
                this.pos.pop();
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
            const pos = [event.screenX, event.screenY];
            this.pos = [];
            this.startPos = pos;
            this.addPos(pos);
            this.first = true;
            this.dragging = true;
            if (event.dataTransfer) {
                // Fix: Firefox draggable issue
                event.dataTransfer.setData("Text", "");
                event.dataTransfer.setDragImage(this.image, 0, 0);
            }
            if (component) {
                this.scrollTop = component.scrollTop;
                component.style.transition = "none";
            }
        };
        this.onDrag = (event) => {
            event && event.stopPropagation();
            const pos = [event.screenX, event.screenY];
            const component = this.component.current;
            if (this.dragging && pos[0] !== 0 && component && this.startPos) {
                if (this.first) {
                    this.isVertical =
                        Math.abs(this.pos[0][1] - pos[1]) -
                            Math.abs(this.pos[0][0] - pos[0]) >
                            0;
                    this.first = false;
                }
                if (!this.isVertical) {
                    const diff = pos[0] - this.startPos[0];
                    const direction = pos[0] - this.pos[0][0];
                    this.direction =
                        direction === 0 ? this.direction : direction > 0;
                    this.addPos(pos);
                    component.scrollTop = this.scrollTop;
                    component.style.transform = `translateX(${this.offset}) translate(${diff}px,0)`;
                }
            }
        };
        this.onDragStop = (event) => {
            event && event.stopPropagation();
            const component = this.component.current;
            if (component && this.dragging) {
                if (!this.direction) {
                    this.offset = this.defaultOffset;
                }
                else {
                    this.offset = "0";
                }
                if (!this.isVertical) {
                    component.scrollTop = this.scrollTop;
                    component.style.transition = this.transition;
                    component.style.transform = `translateX(${this.offset}) translate(0,0)`;
                }
                this.dragging = false;
            }
        };
        this.trigger = () => {
            this.direction = !this.direction;
            this.dragging = true;
            const component = this.component.current;
            this.scrollTop = component ? component.scrollTop : null;
            this.onDragStop(null);
        };
        this.component = ref;
        this.defaultOffset = offset.trim();
        this.offset = this.defaultOffset;
        this.image.src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
        this.forbidList = forbidList;
    }
}
DragCore.SIZE = 3;
export default SidePanel;
