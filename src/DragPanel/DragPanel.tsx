import * as React from "react";
import "./DragPanel.css";
import classNames from "classnames";
interface DragPanelProps {
    className?: string;
    defaultState?: number;
    states?: string[][];
    direction: "horizontal" | "vertical" | "both";
    handle?: string;
    trigger?: string;
    onTrigger?: Function;
}
class DragPanel extends React.Component<DragPanelProps, any> {
    ref: React.RefObject<any> = React.createRef();
    DragCore = new DragCore(
        this.ref,
        this.props.direction,
        this.props.states,
        this.props.defaultState
    );
    componentDidMount = () => {
        let handle = this.props.handle
            ? document.querySelector(this.props.handle)
            : this.ref.current;

        let trigger = this.props.trigger
            ? document.querySelector(this.props.trigger)
            : null;

        if (handle) {
            handle.addEventListener(
                "dragstart",
                this.DragCore.onDragStart,
                true
            );
            handle.addEventListener("drag", this.DragCore.onDrag, true);
            handle.addEventListener("dragend", this.DragCore.onDragStop, true);
            handle.addEventListener(
                "touchstart",
                this.DragCore.onTouchStart,
                true
            );
            handle.addEventListener(
                "touchmove",
                this.DragCore.onTouchMove,
                true
            );
            handle.addEventListener(
                "touchend",
                this.DragCore.onTouchStop,
                true
            );
            handle.setAttribute("draggable", true);
        }

        if (trigger) {
            trigger.addEventListener("click", (e: any) => {
                if (this.props.onTrigger) {
                    const stateIndex = this.props.onTrigger(
                        this.DragCore.curPos.state,
                        e
                    );
                    this.DragCore.curPos = {
                        state:
                            stateIndex !== undefined
                                ? stateIndex
                                : this.DragCore.curPos.state,
                        displacement: [0, 0],
                        pos: [0, 0]
                    };
                    this.DragCore.transform();
                }
            });
        }
    };

    shouldComponentUpdate = () => false;
    public render() {
        return (
            <div
                className={classNames("DragPanel", this.props.className)}
                style={{
                    transform: this.DragCore.getTransform(),
                    transition: this.DragCore.transition
                }}
                ref={this.ref}
            >
                {this.props.children}
            </div>
        );
    }
}

class DragCore {
    image = new Image();
    static SIZE = 3;
    component: React.RefObject<any>;

    curPos: {
        state: number;
        displacement: number[];
        pos: number[];
    } = {
        state: -1,
        displacement: [0, 0],
        pos: [0, 0]
    };
    transition: string = "0.3s transform ease-in-out";
    direction: "horizontal" | "vertical" | "both";
    translatedStates: ({ percent: boolean; value: number })[][] = [];
    states: string[][];

    // dragging
    pos: number[][] = [];
    startPos: number[] = [0, 0];

    // adaptation for scroll functionality
    first: boolean = true;
    isMainDir: boolean = true;
    isPostiveDir: boolean = false;
    scrollTop: number = 0;

    // adaptation for inside drag component
    dragging: boolean = false;

    constructor(
        ref: React.RefObject<any>,
        direction: "horizontal" | "vertical" | "both",
        states: string[][] = [],
        defaultState: number = -1
    ) {
        this.component = ref;
        this.direction = direction;
        this.states = states;
        this.translatedStates = states.map(state => {
            return state.map(css => this.translateCSS(css));
        });

        this.curPos.state = defaultState;
        this.image.src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    }

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

    onTouchStop = (event: any) => {
        this.onDragStop(event);
    };

    onDragStart = (event: any) => {
        event && event.stopPropagation();
        const component = this.component.current;
        this.startPos = [event.screenX, event.screenY];
        console.dir(event);

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

    onDrag = (event: any) => {
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
            } else {
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

    onDragStop = (event: any) => {
        event && event.stopPropagation();
        const component = this.component.current;
        if (component && this.dragging && this.isMainDir) {
            if (this.isMainDir) {
                component.scrollTop = this.scrollTop;
                component.style.transition = this.transition;
                this.curPos.displacement[0] += this.curPos.pos[0];
                this.curPos.displacement[1] += this.curPos.pos[1];
                this.curPos.pos = [0, 0];

                if (this.states.length > 0) {
                    // find the nearest states
                    this.curPos.state = this.findNearestState();
                    this.curPos.displacement = [0, 0];
                    this.transform();
                }
            }

            this.dragging = false;
        }
    };

    transform = () => {
        const component = this.component.current;
        if (component) {
            component.scrollTop = this.scrollTop;
            component.style.transform = this.getTransform();
        }
    };

    getTransform = () => {
        return `translateX(${
            this.curPos.state < 0 ? 0 : this.states[this.curPos.state][0]
        }) translateY(${
            this.curPos.state < 0 ? 0 : this.states[this.curPos.state][1]
        }) translate(${this.curPos.displacement[0] +
            this.curPos.pos[0]}px, ${this.curPos.displacement[1] +
            this.curPos.pos[1]}px)`;
    };

    translateCSS = (css: string) => {
        css = css.trim();
        if (css.indexOf("%") !== -1) {
            return {
                percent: true,
                value: parseFloat(css) / 100
            };
        } else {
            return {
                percent: false,
                value: parseFloat(css)
            };
        }
    };

    calculateState = (stateIndex: number, length: number[]) => {
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

    findNearestState = (): number => {
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
                        diff = (curPos[0] - pos[0]) ** 2;
                        break;
                    case "vertical":
                        diff = (curPos[1] - pos[1]) ** 2;
                        break;
                    default:
                        diff =
                            (curPos[0] - pos[0]) ** 2 +
                            (curPos[1] - pos[1]) ** 2;
                }

                minI = diff < min ? i : minI;
                min = diff < min ? diff : min;
            }

            return minI;
        }

        return -1;
    };

    trigger = () => {
        // this.direction = !this.direction;
        this.dragging = true;
        const component = this.component.current;
        this.scrollTop = component ? component.scrollTop : null;
        this.onDragStop(null);
    };
}

export default DragPanel;
