import * as React from "react";
import "./SidePanel.css";
import classNames from "classnames";
export interface SidePanelProps {
    offset: string;
    trigger?: string;
    className?: string;
}
class SidePanel extends React.Component<SidePanelProps, any> {
    ref: React.RefObject<any> = React.createRef();
    DragCore = new DragCore(this.ref, this.props.offset);
    public render() {
        return (
            <div
                className={classNames("SidePanel", this.props.className)}
                style={{
                    transform: `translateX(${this.props.offset}) translate(0,0)`
                }}
                ref={this.ref}
                draggable
                onDragStart={this.DragCore.onDragStart}
                onDrag={this.DragCore.onDrag}
                onDragEnd={this.DragCore.onDragStop}
                onTouchStart={this.DragCore.onTouchStart}
                onTouchMove={this.DragCore.onTouchMove}
                onTouchEnd={this.DragCore.onTouchStop}
            >
                {this.props.children}
            </div>
        );
    }

    public componentDidMount = () => {
        this.bindTrigger();
    };

    bindTrigger = () => {
        if (this.props.trigger) {
            const trigger = document.querySelector(this.props.trigger);
            if (trigger) {
                trigger.addEventListener("click", this.DragCore.trigger);
            }
        }
    };
}

class DragCore {
    static image: Element = document.body.appendChild(
        document.createElement("div")
    );

    static SIZE = 3;
    component: React.RefObject<any>;
    offset: string;
    defaultOffset: string;
    transition: string = "0.3s transform ease-in-out";
    direction: boolean = false;

    // dragging
    pos: number[][] = [];
    startPos?: number[];

    // adaptation for scroll functionality
    first: boolean = true;
    isVertical: boolean = false;
    scrollTop: number = 0;

    // adaptation for inside drag component
    dragging: boolean = false;

    constructor(ref: React.RefObject<any>, offset: string) {
        this.component = ref;
        this.defaultOffset = offset.trim();
        this.offset = this.defaultOffset;
    }

    addPos = (pos: number[]) => {
        this.pos.unshift(pos);
        if (this.pos.length > DragCore.SIZE) {
            this.pos.pop();
        }
    };

    onTouchStart = (event: any) => {
        event.screenX = event.changedTouches[0].screenX;
        event.screenY = event.changedTouches[0].screenY;
        this.onDragStart(event);
    };

    onTouchMove = (event: any) => {
        event.screenX = event.changedTouches[0].screenX;
        event.screenY = event.changedTouches[0].screenY;
        this.onDrag(event);
    };

    onTouchStop = () => {
        this.onDragStop();
    };

    onDragStart = (event: any) => {
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

    onDrag = (event: any) => {
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

    onDragStop = () => {
        const component = this.component.current;
        this.dragging = false;
        if (!this.direction && component) {
            this.offset = this.defaultOffset;
        } else {
            this.offset = "0";
        }

        if (!this.isVertical) {
            component.scrollTop = this.scrollTop;
            component.style.transform = `translateX(${this.offset}) translate(0,0)`;
            component.style.transition = this.transition;
        }
    };

    trigger = () => {
        this.direction = !this.direction;
        this.onDragStop();
    };

    animmate = () => {};
}

export default SidePanel;
