import * as React from "react";
import "./SidePanel.css";
export interface SidePanelProps {
    offset: string;
    trigger?: string;
    className?: string;
}
declare class SidePanel extends React.Component<SidePanelProps, any> {
    ref: React.RefObject<any>;
    DragCore: DragCore;
    render(): JSX.Element;
    componentDidMount: () => void;
    bindTrigger: () => void;
}
declare class DragCore {
    static image: Element;
    static SIZE: number;
    component: React.RefObject<any>;
    offset: string;
    defaultOffset: string;
    transition: string;
    direction: boolean;
    pos: number[][];
    startPos?: number[];
    first: boolean;
    isVertical: boolean;
    scrollTop: number;
    dragging: boolean;
    constructor(ref: React.RefObject<any>, offset: string);
    addPos: (pos: number[]) => void;
    onTouchStart: (event: any) => void;
    onTouchMove: (event: any) => void;
    onTouchStop: () => void;
    onDragStart: (event: any) => void;
    onDrag: (event: any) => void;
    onDragStop: () => void;
    trigger: () => void;
    animmate: () => void;
}
export default SidePanel;
