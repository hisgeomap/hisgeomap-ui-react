/// <reference types="node" />
import * as React from "react";
import "./Crown.css";
interface CrownProps {
    className?: string;
    width?: string | number;
    components: any[];
    speed?: number;
}
interface CrownState {
}
declare class Crown extends React.Component<CrownProps, CrownState> {
    ref: React.RefObject<any>;
    timer?: NodeJS.Timeout;
    animation?: number;
    isAnimated: boolean;
    speed: number;
    animate: (speed: number, dest: number, positive: boolean, setValue: Function, getValue: Function, last?: number | undefined) => void;
    center: (clientX?: number | undefined) => void;
    onClick: (e: any) => void;
    reset: () => void;
    onScroll: (e: any) => void;
    render(): JSX.Element;
}
export default Crown;
