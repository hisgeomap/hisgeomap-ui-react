import * as React from "react";
import "./SidePanel.css";
import classNames from "classnames";
class SidePanel extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
        this.DragCore = new DragCore(this.ref, this.props.offset);
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
            }, ref: this.ref, draggable: true, onDragStart: this.DragCore.onDragStart, onDrag: this.DragCore.onDrag, onDragEnd: this.DragCore.onDragStop, onTouchStart: this.DragCore.onTouchStart, onTouchMove: this.DragCore.onTouchMove, onTouchEnd: this.DragCore.onTouchStop }, this.props.children));
    }
}
class DragCore {
    constructor(ref, offset) {
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
        this.onTouchStop = () => {
            this.onDragStop();
        };
        this.onDragStart = (event) => {
            const component = this.component.current;
            const pos = [event.screenX, event.screenY];
            this.pos = [];
            this.startPos = pos;
            this.addPos(pos);
            this.first = true;
            this.dragging = true;
            if (event.dataTransfer) {
                event.dataTransfer.setDragImage(DragCore.image, 0, 0);
            }
            if (component) {
                this.scrollTop = component.scrollTop;
                component.style.transition = "none";
            }
        };
        this.onDrag = (event) => {
            const pos = [event.screenX, event.screenY];
            const component = this.component.current;
            if (this.dragging && pos[0] !== 0 && component && this.startPos) {
                if (this.first) {
                    this.isVertical =
                        Math.abs(this.pos[0][1] - pos[1]) -
                            Math.abs(this.pos[0][0] - pos[0]) >=
                            0;
                    this.first = false;
                }
                if (!this.isVertical) {
                    const diff = pos[0] - this.startPos[0];
                    const direction = pos[0] - this.pos[0][0];
                    this.direction =
                        direction === 0 ? this.direction : direction > 0;
                    this.addPos(pos);
                    component.style.transform = `translateX(${this.offset}) translate(${diff}px,0)`;
                    component.scrollTop = this.scrollTop;
                }
            }
        };
        this.onDragStop = () => {
            const component = this.component.current;
            this.dragging = false;
            if (!this.direction && component) {
                this.offset = this.defaultOffset;
            }
            else {
                this.offset = "0";
            }
            if (!this.isVertical) {
                component.scrollTop = this.scrollTop;
                component.style.transform = `translateX(${this.offset}) translate(0,0)`;
                component.style.transition = this.transition;
            }
        };
        this.trigger = () => {
            this.direction = !this.direction;
            this.onDragStop();
        };
        this.animmate = () => { };
        this.component = ref;
        this.defaultOffset = offset.trim();
        this.offset = this.defaultOffset;
    }
}
DragCore.image = document.body.appendChild(document.createElement("div"));
DragCore.SIZE = 3;
export default SidePanel;
