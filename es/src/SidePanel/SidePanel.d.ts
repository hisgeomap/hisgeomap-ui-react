import * as React from "react";
import "./SidePanel.css";
export interface SidePanelProps {
    offset: string;
    trigger?: string;
    defaultExpand?: boolean;
    className?: string;
    forbidList?: string[];
}
declare class SidePanel extends React.Component<SidePanelProps, any> {
    ref: React.RefObject<any>;
    DragCore: DragCore;
    render(): JSX.Element;
    componentDidMount: () => void;
    bindTrigger: () => void;
}
declare class DragCore {
    image: HTMLImageElement;
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
    forbidList: string[];
    constructor(ref: React.RefObject<any>, offset: string, expand?: boolean, forbidList?: string[]);
    addPos: (pos: number[]) => void;
    onTouchStart: (event: any) => void;
    onTouchMove: (event: any) => void;
    onTouchStop: (event: any) => void;
    onDragStart: (event: any) => void;
    onDrag: (event: any) => void;
    onDragStop: (event: any) => void;
    trigger: () => void;
}
export default SidePanel;
