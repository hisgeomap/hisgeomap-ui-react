import * as React from "react";
import "./DragPanel.css";
interface DragPanelProps {
    className?: string;
    defaultState?: number;
    state?: number;
    states?: string[][];
    direction: "horizontal" | "vertical" | "both";
    handle?: string;
    trigger?: string;
    onTrigger?: Function;
    onStateChange?: Function;
}
declare class DragPanel extends React.Component<DragPanelProps, any> {
    ref: React.RefObject<any>;
    DragCore: DragCore;
    handle: HTMLElement | null;
    trigger: NodeList | null;
    static attrsNeedsUpdate: (keyof DragPanelProps)[];
    componentDidUpdate: (prevProps: DragPanelProps) => void;
    needsUpdate: (prevProps: DragPanelProps, props: DragPanelProps, list: ("className" | "direction" | "trigger" | "defaultState" | "state" | "states" | "handle" | "onTrigger" | "onStateChange")[]) => boolean;
    unbindEvent: () => void;
    bindEvent: () => void;
    triggerFunc: (e: any) => void;
    componentDidMount: () => void;
    render(): JSX.Element;
}
declare class DragCore {
    image: HTMLImageElement;
    static SIZE: number;
    component: React.RefObject<any>;
    curPos: {
        state: number;
        displacement: number[];
        pos: number[];
    };
    transition: string;
    direction: "horizontal" | "vertical" | "both";
    translatedStates: {
        percent: boolean;
        value: number;
    }[][];
    states: string[][];
    pos: number[][];
    startPos: number[];
    first: boolean;
    isMainDir: boolean;
    isPostiveDir: boolean;
    scrollTop: number;
    dragging: boolean;
    constructor(ref: React.RefObject<any>, direction: "horizontal" | "vertical" | "both", states?: string[][], defaultState?: number, onStateChange?: Function);
    onStateChange?: Function;
    setState: (state?: number | undefined) => void;
    onTouchStart: (event: any) => void;
    onTouchMove: (event: any) => void;
    onTouchStop: (event: any) => void;
    onDragStart: (event: any) => void;
    onDrag: (event: any) => void;
    onDragStop: (event: any) => void;
    onDragOver: (event: any) => void;
    transform: () => void;
    getTransform: () => string;
    translateCSS: (css: string) => {
        percent: boolean;
        value: number;
    };
    calculateState: (stateIndex: number, length: number[]) => number[];
    findNearestState: () => number;
    trigger: () => void;
}
export default DragPanel;
